export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const issueNumber = req.query.issue;
  if (!issueNumber) return res.status(400).json({ error: 'Missing issue number' });

  const response = await fetch(`https://api.github.com/repos/adityanetherlands/ifs-ai-summit/issues/${issueNumber}`, {
    headers: {
      'Authorization': `Bearer ${process.env.GH_ISSUE_TOKEN}`,
      'Accept': 'application/vnd.github+json',
    },
  });

  if (!response.ok) return res.status(404).json({ error: 'Issue not found' });

  const issue = await response.json();
  const labels = issue.labels.map(l => l.name);

  let status = 'queued';
  if (labels.includes('reverted')) {
    status = 'reverted';
  } else if (labels.includes('revert-conflict')) {
    status = 'revert-conflict';
  } else if (labels.includes('reverting') || labels.includes('revert')) {
    status = 'reverting';
  } else if (labels.includes('completed')) {
    status = 'completed';
  } else if (issue.state === 'closed') {
    status = 'completed';
  }

  // Update Supabase status when it changes
  if (status !== 'queued') {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/submissions?issue_number=eq.${issueNumber}`, {
          method: 'PATCH',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({ status }),
        });
      } catch (e) { /* don't block response */ }
    }
  }

  return res.status(200).json({ status, title: issue.title });
}

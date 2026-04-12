const REPO = 'adityanetherlands/ifs-ai-summit';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { issue_number, password } = req.body;

  if (password !== process.env.SUBMIT_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  if (!issue_number) {
    return res.status(400).json({ error: 'Missing issue number' });
  }

  const ghHeaders = {
    'Authorization': `Bearer ${process.env.GH_ISSUE_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github+json',
  };

  // Verify issue exists and is completed
  const issueRes = await fetch(`https://api.github.com/repos/${REPO}/issues/${issue_number}`, {
    headers: ghHeaders,
  });

  if (!issueRes.ok) {
    return res.status(404).json({ error: 'Issue not found' });
  }

  const issue = await issueRes.json();
  const labels = issue.labels.map(l => l.name);

  if (!labels.includes('completed')) {
    return res.status(400).json({ error: 'Issue is not completed yet — nothing to revert' });
  }

  if (labels.includes('reverted')) {
    return res.status(400).json({ error: 'Issue has already been reverted' });
  }

  if (labels.includes('reverting')) {
    return res.status(400).json({ error: 'Revert is already in progress' });
  }

  // Add 'revert' label to trigger the workflow
  await fetch(`https://api.github.com/repos/${REPO}/issues/${issue_number}/labels`, {
    method: 'POST',
    headers: ghHeaders,
    body: JSON.stringify({ labels: ['revert'] }),
  });

  // Update Supabase status to reverting
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/submissions?issue_number=eq.${issue_number}`, {
        method: 'PATCH',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ status: 'reverting' }),
      });
    } catch (e) { /* don't block response */ }
  }

  return res.status(200).json({ success: true, message: 'Revert initiated' });
}

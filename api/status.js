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
  if (labels.includes('completed')) {
    status = 'completed';
  } else if (issue.state === 'closed') {
    status = 'completed';
  }

  return res.status(200).json({ status, title: issue.title });
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, body, password } = req.body;

  // Simple password gate
  if (password !== process.env.SUBMIT_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  // Create GitHub issue
  const response = await fetch('https://api.github.com/repos/adityanetherlands/ifs-ai-summit/issues', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GH_ISSUE_TOKEN}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
    },
    body: JSON.stringify({
      title: `Feature Request: ${title}`,
      body: body,
      labels: ['feature-request'],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    return res.status(500).json({ error: 'Failed to create issue', details: err });
  }

  const issue = await response.json();
  return res.status(200).json({ success: true, issue_number: issue.number, url: issue.html_url });
}

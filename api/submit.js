const REPO = 'adityanetherlands/ifs-ai-summit';
const TEXT_EXTENSIONS = ['.md', '.txt'];
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

function getFileExt(name) {
  return name.slice(name.lastIndexOf('.')).toLowerCase();
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, title, body, password, attachments = [] } = req.body;

  // Simple password gate
  if (password !== process.env.SUBMIT_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const ghHeaders = {
    'Authorization': `Bearer ${process.env.GH_ISSUE_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github+json',
  };

  // --- Build issue body ---
  let issueBody = '';
  if (name) {
    issueBody += `**Requested by:** ${name}\n\n---\n\n`;
  }
  issueBody += body;

  // Inline text file contents
  for (const att of attachments) {
    const ext = getFileExt(att.name);
    if (TEXT_EXTENSIONS.includes(ext)) {
      const content = Buffer.from(att.base64, 'base64').toString('utf-8');
      issueBody += `\n\n---\n\n### Attached: ${att.name}\n\n${content}`;
    }
  }

  // --- Step 1: Create the GitHub issue ---
  const issueRes = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: 'POST',
    headers: ghHeaders,
    body: JSON.stringify({
      title: `Feature Request: ${title}`,
      body: issueBody,
      labels: ['feature-request'],
    }),
  });

  if (!issueRes.ok) {
    const err = await issueRes.text();
    return res.status(500).json({ error: 'Failed to create issue', details: err });
  }

  const issue = await issueRes.json();
  const issueNumber = issue.number;

  // --- Step 2: Upload image attachments to repo ---
  const imageAttachments = attachments.filter(att => IMAGE_EXTENSIONS.includes(getFileExt(att.name)));

  if (imageAttachments.length > 0) {
    const imageLinks = [];

    for (const att of imageAttachments) {
      const path = `_uploads/issue-${issueNumber}/${att.name}`;
      const uploadRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
        method: 'PUT',
        headers: ghHeaders,
        body: JSON.stringify({
          message: `Upload attachment for issue #${issueNumber}`,
          content: att.base64,
          branch: 'main',
        }),
      });

      if (uploadRes.ok) {
        const uploadData = await uploadRes.json();
        imageLinks.push({ name: att.name, url: uploadData.content.download_url });
      }
    }

    // Update issue body with image links
    if (imageLinks.length > 0) {
      let imageSection = '\n\n---\n\n### Attached images\n\n';
      imageSection += imageLinks.map(img => `![${img.name}](${img.url})`).join('\n\n');

      await fetch(`https://api.github.com/repos/${REPO}/issues/${issueNumber}`, {
        method: 'PATCH',
        headers: ghHeaders,
        body: JSON.stringify({ body: issueBody + imageSection }),
      });
    }
  }

  // Insert into Supabase changelog
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/submissions`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          name: name || null,
          title,
          description: body,
          issue_number: issueNumber,
          status: 'queued',
        }),
      });
    } catch (e) { /* don't block response if Supabase fails */ }
  }

  return res.status(200).json({ success: true, issue_number: issueNumber, url: issue.html_url });
}

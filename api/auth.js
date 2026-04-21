export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const { password } = body || {};
  const correctPassword = process.env.SITE_PASSWORD;

  if (!correctPassword) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  if (password && password.trim().toLowerCase() === correctPassword.toLowerCase()) {
    res.setHeader(
      'Set-Cookie',
      'ifs_auth=1; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800'
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Incorrect' });
}

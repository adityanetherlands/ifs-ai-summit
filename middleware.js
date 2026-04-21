export default function middleware(request) {
  const { pathname } = new URL(request.url);

  // Pass through: root, API routes, and static assets
  if (
    pathname === '/' ||
    pathname === '/index.html' ||
    pathname.startsWith('/api/') ||
    /\.(ico|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|otf|css|js|map|xlsx|md|pdf)$/.test(pathname)
  ) {
    return;
  }

  // Check for auth cookie
  const cookie = request.headers.get('cookie') ?? '';
  const authenticated = cookie
    .split(';')
    .map(c => c.trim())
    .some(c => c === 'ifs_auth=1');

  if (!authenticated) {
    return Response.redirect(new URL('/', request.url), 302);
  }
}

export const config = {
  matcher: ['/((?!_vercel|_next).*)'],
};

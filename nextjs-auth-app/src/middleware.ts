import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is a protected route
  const isProtectedRoute = pathname.startsWith('/dashboard');
  
  // Get the session token
  const token = await getToken({ req: request });
  
  // If it's a protected route and there's no token, redirect to sign-in
  if (isProtectedRoute && !token) {
    const url = new URL('/auth/signin', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
  }
  
  // If it's the sign-in page and there's a token, redirect to dashboard
  if (pathname.startsWith('/auth/signin') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

// Configure which paths this middleware will run on
export const config = {
  matcher: ['/dashboard/:path*', '/auth/signin'],
};


import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/',
    '/orders/:path*',
    '/profile/:path*',
    '/select-clothes/:path*',
    '/select-date/:path*',
    '/select-address/:path*',
    '/add-address/:path*',
    '/payment/:path*',
    '/order-confirmed/:path*',
    '/notifications/:path*',
  ],
}; 
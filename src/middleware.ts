import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

// Protect all /admin routes except /admin/login
export const config = {
  matcher: '/admin/:path((?!login).*)', 
};

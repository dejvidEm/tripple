import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ak je to hlavná stránka a nie je prihlásený, presmeruj na login
  if (pathname === '/' && !isLoggedIn()) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }
  return NextResponse.next();
}

function isLoggedIn() {
  // Tu si implementuj logiku na overenie prihlásenia
  return false; // Zmeň to na logiku na overenie prihlásenia
}
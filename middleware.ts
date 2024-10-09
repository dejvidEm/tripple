import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ak je to hlavná stránka a nie je prihlásený, presmeruj na login
  
}

function isLoggedIn() {
  // Tu si implementuj logiku na overenie prihlásenia
  return false; // Zmeň to na logiku na overenie prihlásenia
}
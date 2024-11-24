import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'tripple_app_mikulas'; // Nahraďte tajným kľúčom

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Získajte token z cookies
  const token = request.cookies.get('token')?.value;
  console.log('Token z cookies:', token);

  // Ak token neexistuje, presmerujte na login
  if (pathname === '/' && !token) {
    console.log('Token neexistuje. Presmerovanie na /auth');
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Overte token, ak existuje
  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET); // Overenie signatúry tokenu
      console.log('Token je platný:', decoded);

      // Ak potrebujete, pridajte ďalšie logiky
    } catch (error) {
      // Explicitné typovanie chyby na Error
      if (error instanceof Error) {
        console.error('Neplatný token:', error.message);
      } else {
        console.error('Neznáma chyba:', error);
      }
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }

  return NextResponse.next(); // Pokračujte, ak je všetko v poriadku
}
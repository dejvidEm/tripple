import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Nahraďte tajným kľúčom

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Získajte token z cookies
  const token = request.cookies.get('token')?.value; // Používame .value na získanie string hodnoty

  // Ak token neexistuje a používateľ sa pokúša ísť na chránenú stránku, presmerujte ho
  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Ak token existuje, overte jeho platnosť
  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET); // Overenie signatúry tokenu
      console.log('Token je platný:', decoded);

      // Ak potrebujete ďalšie kontroly (napr. overenie rolí), pridajte ich tu
    } catch (error) {
      console.error('Neplatný token:', error);

      // Ak je token neplatný, presmerujte na login
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }

  return NextResponse.next(); // Pokračujte, ak je všetko v poriadku
}
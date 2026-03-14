import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// KLJUČNO: Mora postojati "export default"
export default createMiddleware(routing);

export const config = {
  // Matcher osigurava da middleware ne radi na statičkim fajlovima (slike, favicon itd.)
  // već samo na rutama koje treba da imaju /sr ili /en
  matcher: ['/', '/(sr|en)/:path*']
};
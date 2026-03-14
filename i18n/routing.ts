import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // Lista podržanih jezika
  locales: ['sr', 'en'],
 
  // Podrazumevani jezik ako nema prefiksa u URL-u
  defaultLocale: 'sr'
});
 
// Eksportujemo funkcije koje smo uvezli u Header.tsx
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Čekamo da dobijemo informaciju o trenutnom jeziku (npr. 'sr')
  let locale = await requestLocale;

  // Ako jezik nije podržan, koristi podrazumevani (sr)
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Ovde mu kažemo gde su JSON fajlovi. 
    // Putanja ide iz ugla ovog fajla do messages foldera.
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
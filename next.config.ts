import createNextIntlPlugin from 'next-intl/plugin';

// Putanja do fajla koji smo malopre napravili
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ovde ostavi svoja podešavanja ako ih imaš (npr. images)
};

export default withNextIntl(nextConfig);
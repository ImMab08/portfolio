import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales, pathnames, localePrefix } from './navigation'

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next|.*\\..*).*)']
};

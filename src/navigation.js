import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const defaultLocale = 'en';
export const locales = ['en', 'es'];
export const localePrefix = process.env.NEXT_PUBLIC_LOCALE_PREFIX === 'never' ? 'never' : 'as-need';

export const pathnames = {
  '/': '/',
  '/about': {
    en: "/about",
    es: "/sobre-nosotros"
  },
  '/projects': {
    en: "/projects",
    es: "/proyectos"
  },
  '/redirect': '/redirect'
}

export const { Link, redirec, usePathname, useRouter} = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames
})

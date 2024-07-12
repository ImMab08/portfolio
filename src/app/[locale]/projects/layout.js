import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import Dashboard from "@/components/Proyects/Dashboard";
import Navbard from "@/components/Proyects/Navbard";
import NavbardMobile from "@/components/Proyects/NavbardMobile";

export async function generateStaticParams() {
  const locales = ["en", "es"];
  return locales.map((locale) => ({ locale }));
}

export default async function Layout({ children, params }) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="bg-primary">
        <NextIntlClientProvider messages={messages}>
          <main className="h-screen flex flex-col">
            <div className="hidden sm:block flex-shrink-0">
              <Navbard />
            </div>
            <div className="flex-shrink-0 sm:hidden">
              <NavbardMobile />
            </div>
            <div className="flex w-full flex-grow overflow-hidden">
              <div className="w-[25%] h-full overflow-auto hidden sm:block">
                <Dashboard />
              </div>
              <div className="flex-grow w-[75%] h-full overflow-auto">
                {children}
              </div>
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

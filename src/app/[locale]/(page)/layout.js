import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import Navbard from "@/components/shared/Navbar/Nav";

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
          <main className="h-auto flex flex-col">
            <div className="">
              <Navbard />
            </div>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

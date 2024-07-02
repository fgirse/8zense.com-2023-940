import {ReactNode} from 'react';
import clsx from 'clsx';
import Navigation from '@/src/components/Navigation';
import Header from '@/src/components/Header'
import {locales} from '@/src/config';
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';
import {NextIntlClientProvider} from 'next-intl';

import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';



type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <main className="h-full" lang={locale}>
      <ClerkProvider>
        <div className={clsx( 'flex h-full flex-col')}>
          <NextIntlClientProvider messages={messages}>
            <Navigation />
            {children}
          </NextIntlClientProvider>
        </div>
        </ClerkProvider>
    </main>
  );
}
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import Link from 'next/link';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <Link href="/">{t('home')}</Link>
          <Link href="/pathnames">{t('pathnames')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/Kontakt">{t('Kontakt')}</Link>
          <Link href="/gallery">{t('gallery')}</Link>
          
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}


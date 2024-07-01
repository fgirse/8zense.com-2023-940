'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import type {pathnames} from '@/src/config';
import {Link} from '@/src/navigation';

export default function NavigationLink<
  Pathname extends keyof typeof pathnames
>({href, ...rest}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block rounded-xl uppercase px-2 py-3 transition-colors',
        isActive ?  'bg-slate-600 text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-red-800'
      )}
      href={href}
      {...rest}
    />
  );
}

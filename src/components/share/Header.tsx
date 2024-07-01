'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import Locked from '@/public/assets/images/locked.png'
import Logo from '@/public/assets/images/LogoEZ990.svg'
import { PropsWithChildren } from 'react'
import MenuBar from "@/src/components/Navigation";
import LangSwitcher from '@/src/components/LocaleSwitcher';
import { useTranslations } from 'next-intl'
import { FC } from 'react'


interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const newLocal = 'ml-5'
  return (
    <header className='flex h-20 flex-col items-center justify-between bg-slate-700 text-white lg:h-20'>
      <div
        id=''
        className=' flex h-20 w-[100vw] flex-row items-center justify-between bg-slate-600 lg:w-[1300px] xl:w-[1500px] 2xl:w-[1800px]'
      >
        <div className='mt-6 flex flex-row items- justify-center'>
          <Link href='/' className={newLocal}>
            <div className=' flex-row items-center justify-center gap-x-5'>
              <div className='h-16 w-[5vw] hover:translate-x-2 hover:translate-y-2 hover:bg-slate-500'>
                <Image src={Logo} sizes='100vw' alt='Logo 8zense.com' />
              </div>
              <h1 className='md:hover:text-zenseCreme hidden text-slate-400 md:mr-6  md:block md:scale-125 md:text-lg md:hover:translate-x-2 md:hover:translate-y-2 xl:text-xl'>
                8zenSe.com
              </h1>
            </div>
          </Link>
          <div className='z-10'>
            <LangSwitcher />
          </div>
        </div>



        <SignedIn>
          <nav className='lg:flex lg:max-w-6xl lg:flex-row lg:items-baseline'>
            <MenuBar />
          </nav>
          <div className='mr-6 flex w-full flex-row items-center justify-between gap-x-20 '>
            <div className='h-[10vh] w-[15vw]'>
              <Image src={Logo} sizes='100vw' width="500" height="500" alt='Logo 8zense.com' />
            </div>
            <UserButton afterSignOutUrl='/user' />
            <div className='text-5xl '></div>
          </div>
        </SignedIn>

        <SignedOut>
          <div className='flex w-full flex-row items-baseline justify-end gap-x-1'>
            <div className='h-8 w-8 lg:h-8 lg:w-8'>
              <Image
                src={Locked}
                alt='Schloss'
                sizes='100vw'
                className='-8 relative rounded-full border-0 border-gray-300'
              />
            </div>

            <Button
              asChild
              className='mr-5 rounded-xl bg-[#fcf601] text-3xl font-bold text-amber-500 hover:border-2 hover:border-[#fcf601] hover:bg-amber-400'
              size='lg'
            >
              <Link href='/sign-in'>Login</Link>
            </Button>
          </div>
        </SignedOut>
      </div>
    </header>
  )
}

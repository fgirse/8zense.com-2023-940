import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/LogoEZ990.svg";
import Link from "next/link";
import LoggedOut from '@/src/components/LoggedOut';
import LoggedIn from '@/src/components/LoggedIn';

const Header = () => {
  return (
    <section className="h-[4vh] text-white bg-neutral-800/80">
      <div className="flex flex-row items-center justify-between">
        <Link href="/" className="ml-7">
          <div className=" flex-row items-center justify-center gap-x-4 md:flex">
            <div className="ml-5 mr-1 relative h-19 w-9 hover:translate-x-2 hover:translate-y-2 hover:bg-slate-500">
              <Image src={Logo} sizes="100vw" alt="Logo 8zense.com" />
            </div>

            <h1 className="md:hover:text-zenseCreme hidden text-slate-400 md:mr-6  md:block md:scale-125 md:text-lg md:hover:translate-x-2 md:hover:translate-y-2 xl:text-xl">
              8zenSe.com
            </h1>
          </div>
        </Link>
        <div className="">
            <LoggedOut/>
            <LoggedIn/>
        </div>
      </div>
    </section>
  );
};

export default Header;

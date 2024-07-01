import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from'@/src/components/ui/button';
import Locked from "@/public/assets/images/locked.png";
import { PropsWithChildren } from "react";
import { useTranslations } from "next-intl";
import { FC } from "react";

const LoggedOut = () => {
  return (
    <section className="">
      <SignedOut>
        <div className="flex w-full flex-row items-baseline justify-end gap-x-3">
          <div className="h-12 w-12 lg:h-8 lg:w-8">
            <Image
              src={Locked}
              alt="Schloss"
              sizes="100vw"
              className="-8 relative rounded-full border-0 border-gray-300"
            />
          </div>

          <Button
            asChild
            className="mr-9 rounded-xl bg-[#fcf601] text-3xl font-bold text-amber-500 hover:border-2 hover:border-[#fcf601] hover:bg-amber-400"
            size="lg"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </SignedOut>
    </section>
  );
};

export default LoggedOut;

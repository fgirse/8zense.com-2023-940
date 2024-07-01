import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
//import Locked from"@/public/asssets/images/locked.png";


import Locked from "@/public/assets/images/locked.png";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-3 bg-stone-700 py-7">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-32 flex-col items-center">
            <Image className="" src={Locked} alt="Illustration Schloss" />
          </div>
          <p className="mb-2 mt-6 w-4/5 rounded-2xl border px-5 text-center text-xl text-slate-200">
            Dieser Inhalt ist nur nach Anmeldung bzw. Registrierung zugänglich!
          </p>
          <h1 className="mb-12 text-center text-3xl text-amber-600 md:text-xl lg:text-[0.66rem]">
            Melden Sie sich bitte an!
          </h1>
          <div></div>
          <SignIn />
        </div>
      </div>
    </>
  );
}

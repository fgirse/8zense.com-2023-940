import React from 'react'
import Image from "next/image";
import EmailModal from "@/src/components/share/EmailModal";
import Button from "@/src/components/share/Button";
import Skizze from "@/public/assets/images/skizze.png";
import { useTranslations } from 'next-intl';
import Space from"@/public/assets/images/space.png";

const IntroWebside = () => {
  const t = useTranslations('Intro');
  return (
    <>
<section>
<div className=" grid grid-cols-12 grid-rows-16 gap-1">

<div className="col-span-7 row-span-3 col-start-1 row-start-4"></div>


<div className="relative mr-5 px-1 col-span-6 row-span-7 col-start-7 row-start-1">

  <p className="mb-5 lg:mr-12 bg-slate-900  rounded-xl  mt-7 py-1 text-slate-50 font-black text-right text-[.9rem] px-3 sm:text-2xl md:font-semibold md:text-[2.33rem] md:leading-9 lg:px-5 lg:py-3 lg:font-semibold lg:text-6xl lg:p-5 ">

    {t("Reference_Carl_Sagan")}

    

  </p>


  <div className=" relative -top-2 left-10 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-2xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 transform translate-x-16 md:transform md:translate-x-44 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1  lg:left-2/4 lg:w-32 lg:h-32">

    <p className="relative z-10 text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">

      Carl

    </p>


    <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">

      Sagan

    </p>

  </div>

</div>

</div>


<section className="lg:w-2/3 mx-auto h-33vh lg:bg-[url('/assets/images/space.png')] lg:bg-contain lg:bg-no-repeat">

<div className="relative -z-10 -mt-60 w-[77vw] h-[33vh] lg:w-[90vw] lg:h-[100vh]">

  <Image src={Space} sizes="100vw" alt="space Illustration" />

</div>


<section className="container mt-16 w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">

  <h1 className="relative -top-20 px-1 uppercase leading-10 text-[3.0rem] font-black md:text-center md:leading-[4rem] md:text-[3.750rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-500 bg-clip-text text-transparent lg:top  lg:tracking-wider lg:leading-0 lg:text-8xl">

   {t('Title')}n

  </h1>


  <div className="relative -top-20 w-[75vw] h-[24vh] lg:w-[45vw]">

    <Image src={Skizze} fill sizes="100vw" alt="Skizze" />

  </div>


  <p className="-mt-12 text-base md:text-lg text-slate-700 my-4 md:my-6">

    <span className="text-zenseSignal2 font-bold">8zenSe.com</span>{" "}"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

  </p>

</section>

<div className="flex flex-col bg-zenseGrey-500 mb-20">

  <EmailModal />

</div>

<section className="container w-full px-8 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">

  <h1 className="relative px-1 uppercase -mt-12 leading-10 text-[3.0rem] font-black md:text-center md:text-[3.750rem] lg:leading-0 lg:text-[4rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-500 bg-clip-text text-transparent lg:top  lg:tracking-wider lg:leading-0 lg:text-9xl">

    {t('Title')}

  </h1>


  <div className="mt-3 relative w-[75vw] h-[24vh] lg:w-[45vw]">

    <Image src={Skizze} fill sizes="100vw" alt="Skizze" />

  </div>


  <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">

    <span className="text-zenseSignal2 font-bold">8zenSe.com</span>{" "}
{("PostTitle02")}
{" "}

  </p>


  <Button />

</section>

</section>


{/*  <section className="shuffle-Hero -mt-44 ">*/}












      </section>
      </>
  )
}

export default IntroWebside
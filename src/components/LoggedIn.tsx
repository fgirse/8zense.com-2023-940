import React from 'react'
import { ClerkProvider } from '@clerk/nextjs';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MenuBar from"@/src/components/Navigation";

const LoggedIn = () => {
  return (
    <ClerkProvider>
 <SignedIn>

<nav className="lg:flex lg:flex-row lg:items-baseline lg:max-w-6xl">


</nav>

<div className="w-full mr-6 flex flex-row justify-between items-center gap-x-5 ">

 

  <UserButton afterSignOutUrl="/" />

  <div className="text-5xl lg:hidden"></div>

</div>

</SignedIn>






    </ClerkProvider>
  )
}

export default LoggedIn
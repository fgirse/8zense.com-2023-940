import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";      
import 'normalize-css/normalize.css';
import styles from './home.module.css';
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';
import link from 'next/link';
import { Roboto_Condensed, Bowlby_One_SC } from 'next/font/google';

const roboto_c = Roboto_Condensed({

  subsets: ['latin'],

  weight: ['400', '700'],

    variable: '--font-roboto_c',

});




export const metadata: Metadata = {

  title: '8zenSe.com',

  description: 'LandingPage for startup, Interiore Design, Innenarchitektur, Desing Beton-Möbel ',

  icons: {icon : "/assets/images/LogoEZ990.svg"}

}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider  appearance={{

      baseTheme:neobrutalism

    }} >


    <html lang="en">
      <body className={roboto_c.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}

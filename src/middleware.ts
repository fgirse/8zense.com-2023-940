import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from 'next-intl/middleware';
import {localePrefix, defaultLocale, locales, pathnames} from '@/src/config';

createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});


 export default authMiddleware({
  publicRoutes: [
    "/",
    "/gallery",
    "/Kontakt",
    "/api/uploadthing",
    "/api/webhook/clerk",
  ],
  ignoredRoutes: ["/api/uploadthing", "/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)",
     // Enable a redirect to a matching locale at the root

     '/',


     // Set a cookie to remember the previous locale for
 
     // all requests that have a locale prefix
 
     '/(de|en|fr|es|pt|it)/:path*',
 
 
     // Enable redirects that add missing locales
 
     // (e.g. `/pathnames` -> `/en/pathnames`)
 
     '/((?!_next|_vercel|.*\\..*).*)'
 

  ],
};
export {createMiddleware}


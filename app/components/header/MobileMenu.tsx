'use client'
import Link from "next/link";
import Image from 'next/image'
import React from "react"




const MobileNav = () => {
  
     return (

      <nav className="md:hidden md:items-center md:justify-center md:gap-5">
      <div className="fixed inset-x-0  z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg top-1 rounded-3xl">
      <div className="px-4">
          <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                  <Link aria-current="page" className="flex items-center" href="/">
                      <Image src="./assets/images/logohitsu.svg"  className="h-8 w-auto" alt="logo" width={50} height={50} />
                      {/* <p className="px-8">Hitsukaya</p> */}
                      </Link>
              </div>
              <div className="lg:flex lg:items-center lg:justify-center lg:gap-5s">
                  <Link aria-current="page" className="inline-block rounded-lg px-4 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/">
                  <svg viewBox="0 0 640 512" width="28px" height="28px" xmlns="http://www.w3.org/2000/svg">
                  <path d="m272 288h-64a16 16 0 0 1 -16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v37.12c11.11-12.88 27-21.12 44.8-21.12h136.94l6.65-7.53a16.51 16.51  0 0 0 3.61-9.47 16.31 16.31 0 0 0 -4.75-10.61l-59.25-52.39v-96a16 16 0 0 0  -16-16h-32a16 16 0 0 0 -16 16v39.3l-88.5-78.38c-5.5-4.92-16.05-8.92-23.45-8.92s-17.93 4-23.47 8.92l-211.8 187.5a16.15 16.15 0 0 0 -4.78 10.58 16.4 16.4 0 0 0 3.55 9.39l18.79 21.31a16.22 16.22  0 0 0 10.66 4.78 16.51 16.51 0 0 0 9.34-3.48l21.66-19.12v164.12a32 32 0 0 0 32  32h176zm357.33 160h-37.33v-160c0-17.67-12.89-32-28.8-32h-230.4c-15.91 0-28.8 14.33-28.8  32v160h-37.33a10.67 10.67 0 0 0 -10.67 10.67v10.66a42.82 42.82 0 0 0 42.6 42.67h298.8a42.82  42.82 0 0 0 42.6-42.67v-10.66a10.67 10.67 0 0 0 -10.67-10.67zm-85.33 0h-192v-144h192z"/>
                  </svg>
                  </Link>
                  <Link className="inline-block rounded-lg px-4 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/about">
                  <svg viewBox="0 0 576 512" width="28px" height="28px" xmlns="http://www.w3.org/2000/svg">
                  <path d="m528 32h-480c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48zm0 400h-480v-352h480zm-320-176c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zm241.6-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-112c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-112c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-112c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/>
                  </svg>
                  </Link>
                  <Link className="inline-block rounded-lg px-4 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="28px" height="28px">
                  <path d="M 15 3 L 15 19.9375 L 19 17.90625 L 23 20 L 23 3 Z M 11 6 C 7.636719 6 5 8.636719 5 12 L 5 33 C 5 36.363281 7.636719 39 11 39 L 12 39 L 12 47.21875 L 21.375 39 L 40 39 C 43.363281 39 46 36.363281 46 33 L 46 12 C 46 8.636719 43.363281 6 40 6 L 25 6 L 25 22.375 L 19 30 L 13 22.375 L 13 6 Z M 19 20.09375 L 15.28125 21.96875 L 17.65625 25 L 20.3125 25 L 22.65625 22 Z M 19.125 30 L 44 30 L 44 33 C 44 35.242188 42.242188 37 40 37 L 23.53125 37 Z"/>
                  </svg>
                  </Link>
                  <Link className="inline-block rounded-lg px-4 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px">
                  <path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z"/>
                  </svg>
                  </Link>
              </div>
              <div className="flex items-center justify-center gap-3">
                  {/* <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                      href="/login">Sign in</Link> */}
                  <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      href="/login">Get Qoute</Link>
              </div>
          </div>
      </div>
      </div>
  </nav>
     );
}
 
export default MobileNav;
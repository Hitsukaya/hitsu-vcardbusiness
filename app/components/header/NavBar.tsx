'use client'
import Link from "next/link";
import Image from 'next/image'
import React from "react"


const NavBar = () => {
  
     return (

<nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
    <div className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <Link aria-current="page" className="flex items-center" href="/">
                    <Image src="./assets/images/logohitsu.svg"  className="h-8 w-auto" alt="logo" width={50} height={50} />
                    <p className="px-8">Hitsukaya</p>
                    </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/home">Home</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/about">About</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/services">Services</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/contact">Contact</Link>

            </div>
            <div className="flex items-center justify-end gap-3">
                <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="#">Sign in</Link>
                <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="#">Get Qoute</Link>
            </div>
        </div>
    </div>
    </div>
</nav>


     );
}
 
export default NavBar;

'use client'
import Link from "next/link"
import React from "react"

const Footer = () => {
    return ( 
<footer className="bg-white border">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">

    <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li><Link href="#" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-blue-700">About</Link></li>
        <li><Link href="#" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-blue-700">Privacy Policy</Link></li>
        <li><Link href="#" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-blue-700">Blog</Link></li>
        <li><Link href="#" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-blue-700">Contact</Link></li>
    </ul>
    <span className="flex flex-wrap justify-center items-center text-sm text-gray-800 sm:text-center  rounded-lg px-2 py-1  font-medium t transition-all duration-200">© 2023 &nbsp;<a href="/" className="hover:underline"> Hitsukaya</a>. All Rights Reserved.
    </span> 
    <p className="flex flex-wrap justify-center items-center">Powered by&nbsp;<Link href="#" className="hover:text-blue-700">Hitsukaya</Link></p>
    </div>
</footer>
     );
}
 
export default Footer;
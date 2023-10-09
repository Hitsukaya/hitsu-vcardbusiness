'use client';

import { Banner } from 'flowbite-react';
import { FaBookOpen } from 'react-icons/fa';
import { HiArrowRight, HiX } from 'react-icons/hi';
import Link from "next/link";
import Image from 'next/image'
import React from "react"

const InfoAlert = () => {
    return (


        <Banner>
        <div className="fixed left-0 top-30 z-50 flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="flex flex-wrap justify-center mb-1 text-base font-semibold text-gray-900 dark:text-white">ALERT!!! EVENTS START DATE</h2>
            <p className="flex flex-wrap justify-center items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                EVENT START IN 00:00:00
            </p>
          </div>
          <div className="flex flex-shrink-0 justify-center items-center">
            <Link href="#"  className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              <FaBookOpen />
              Learn more
            </Link>
            <Link href="#"  className="mr-2 inline-flex items-center justify-center rounded-lg bg-cyan-700 px-3 py-2 text-xs font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Get started  <HiArrowRight /> </Link>
            <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
              <HiX className="h-4 w-4" />
            </Banner.CollapseButton>
          </div>
        </div>
      </Banner>


      );
}
 
export default InfoAlert;
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {


    
  return (
    <footer className="bg-[#EEEDF2] lg:grid lg:grid-cols-5 dark:bg-gray-900">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <Link href="/">
    <Image 
      src="/logo.svg" // 1. Removed '/public' from the path
      alt="Mocker"
      fill={true} // 2. Added fill={true}
      // 3. Removed width and height props
      className="absolute inset-0 h-full w-full object-cover" 
    />
    </Link>
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
            GO BEYOND.
          </span>
        </p>

        <ul className   ="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
          <li>Mocker is a smart, exam-focused platform that helps you practice with realistic mock tests, track performance with detailed analytics, and improve faster through targeted insights. Built for serious prep — simple, fast, and focused on results.</li>
        </ul>

        
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/terms" className ="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="/privacy-policy" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Privacy Policy
              </a>
            </li>

            {/* <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Company Review
              </a>
            </li> */}

            {/* <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Accounts Review
              </a>
            </li> */}

            {/* <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                HR Consulting
              </a>
            </li> */}

            {/* <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                SEO Optimisation
              </a>
            </li> */}
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 dark:text-white">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                About
              </a>
            </li>

            <li>
              <a href="team" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Meet the Team
              </a>
            </li>

            {/* <li>
              <a href="privacy-policy" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="terms" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                Terms & Conditions
              </a>
            </li>
             */}
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          {/* <li>
            <a
                href="/terms"
                className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
              >
                Terms & Conditions
              </a>
          </li>

          <li>
            <a href="/privacy-policy" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Privacy Policy
            </a>
          </li> */}
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0 dark:text-gray-400">
          © 2025. MG & Co. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
// app/(main)/mocks/page.tsx
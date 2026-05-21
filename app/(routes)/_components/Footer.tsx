import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-gray-950 dark:border-gray-900 py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">

        <Link href="/" className="flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity">
          <div className="relative h-10 w-10">
            <Image src="/logo-icon.svg" alt="Mocker" fill className="object-contain" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mocker</span>
        </Link>

        <p className="max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-8">
          Practice. Analyze. Improve. Succeed.<br />Your ultimate exam preparation platform.
        </p>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><Link href="/team" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Meet the Team</Link></li>
          <li><Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
        </ul>



        <div className="w-full max-w-2xl border-t border-gray-100 dark:border-gray-800/50 pt-8">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Mocker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-colors hover:text-[#7e97c6] dark:hover:text-[#a5b8d4] ${
                pathname === '/' ? 'text-[#7e97c6] dark:text-[#a5b8d4]' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/myproject" 
              className={`text-lg font-medium transition-colors hover:text-[#7e97c6] dark:hover:text-[#a5b8d4] ${
                pathname === '/myproject' ? 'text-[#7e97c6] dark:text-[#a5b8d4]' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Projects
            </Link>
             <Link 
              href="/cv" 
              className={`text-lg font-medium transition-colors hover:text-[#7e97c6] dark:hover:text-[#a5b8d4] ${
                pathname === '/cv' ? 'text-[#7e97c6] dark:text-[#a5b8d4]' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              CV
            </Link>
              <Link 
              href="/more_about_me" 
              className={`text-lg font-medium transition-colors hover:text-[#7e97c6] dark:hover:text-[#a5b8d4] ${
                pathname === '/more_about_me' ? 'text-[#7e97c6] dark:text-[#a5b8d4]' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              More About Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { subMenuAnimate } from '@/utils/animate';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/asset/logo.png';

export default function Navbar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <div className='bg-red-900'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-1'>
          <div className='flex h-16 items-center justify-between'>
            <Link href={`/`}>
              <Image src={logo} width={120} alt='Mooflix Logo' />
            </Link>

            <div className='hidden sm:flex relative'>
              <form onSubmit={handleSearch}>
                <input
                  type='text'
                  id='Search'
                  placeholder='Search Movie'
                  className='w-full rounded-md py-2.5 px-6 shadow-xs sm:text-sm border-red-700 bg-gray-100 text-gray-900'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <span className='absolute inset-y-0 end-0 grid w-10 place-content-center'>
                  <button
                    type='submit'
                    className='text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  >
                    <span className='sr-only'>Search</span>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </div>

            <button
              className='block rounded-sm p-2.5 border border-gray-100 transition md:hidden bg-red-900 text-white hover:text-white/75'
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <span className='sr-only'>Toggle menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        <motion.div
          className={`${
            openSearchBar ? 'block' : 'md:hidden'
          } absolute w-full bg-red-900 py-2 px-4`}
          initial='exit'
          animate={openSearchBar ? 'enter' : 'exit'}
          variants={subMenuAnimate}
        >
          <div className='relative mb-1'>
            <form onSubmit={handleSearch}>
              <input
                type='text'
                id='Search'
                placeholder='Search Movie'
                className='w-full rounded-md py-2.5 px-6 shadow-xs sm:text-sm border-gray-700 bg-gray-100 text-gray-900'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <span className='absolute inset-y-0 end-0 grid w-10 place-content-center'>
                <button
                  type='submit'
                  className='text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                >
                  <span className='sr-only'>Search</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </button>
              </span>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}

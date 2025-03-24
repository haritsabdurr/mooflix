'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { apiKey } from '@/utils/apiKey';
import { baseUrl } from '@/utils/baseUrl';
import { SkeletonCard } from '@/components/skeleton';
import MovieCard from '@/components/movieCard';
import axios from 'axios';

export default function MovieLists() {
  const [movieData, setMovieData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const params = useParams();
  const currentPage = Number(params.page) || 1;

  const getAllMovieData = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}&page=${currentPage}`
      );
      setMovieData(res.data.results);
      setTotalPage(res.data.total_pages);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    } catch (err) {
      console.error('Error occured', err);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setIsLoading(true);
      router.push(`${newPage}`);
      window.scrollTo({ top: 0 });
    }
  };

  useEffect(() => {
    getAllMovieData();
  }, [currentPage]);

  return (
    <div className='mx-auto max-w-screen-xl px-4 md:px-7'>
      {isLoading ? (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-6 px-18 md:px-0 mt-8'>
          {Array.from({ length: 18 }).map(() => (
            <SkeletonCard />
          ))}
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-6 px-18 md:px-0 mt-8'>
            {movieData.slice(0, 18).map((index, movie) => (
              <MovieCard key={index} data={movie} />
            ))}
          </div>
          <div className='flex items-center justify-center gap-3 my-6'>
            <button
              className='inline-flex size-10 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180 cursor-pointer'
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
            >
              <span className='sr-only'>Prev Page</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-3'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>

            <p className='text-sm md:text-lg text-gray-900'>
              {currentPage}
              <span className='mx-0.25'>/</span>
              {totalPage}
            </p>

            <button
              className='inline-flex size-10 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180 cursor-pointer'
              onClick={() => handlePageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPage}
            >
              <span className='sr-only'>Next Page</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-3'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

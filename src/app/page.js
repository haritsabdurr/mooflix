'use client';

import { useState, useEffect } from 'react';
import { apiKey } from '@/utils/apiKey';
import { baseUrl } from '@/utils/baseUrl';
import { DesktopDivider, MobileDivider } from '@/components/divider';
import { SkeletonCard } from '@/components/skeleton';
import Responsive from '@/utils/responsive';
import Link from 'next/link';
import Banner from '@/components/banner';
import MovieCard from '@/components/movieCard';

import axios from 'axios';

export default function Home() {
  const [movieData, setMovieData] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [horrorMovie, setHorrorMovie] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getAllMovieData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
      setMovieData(res.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    } catch (err) {
      console.error('Error occured', err);
    }
  };

  const getActionMovie = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`
      );
      setActionMovie(res.data.results);
    } catch (err) {
      console.error('Error occured', err);
    }
  };

  const getHorrorMovie = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=27`
      );
      setHorrorMovie(res.data.results);
    } catch (err) {
      console.error('Error occured', err);
    }
  };

  useEffect(() => {
    getAllMovieData();
    getActionMovie();
    getHorrorMovie();
  }, []);

  useEffect(() => {
    Responsive(setIsDesktop);
  }, [isDesktop]);

  return (
    <div>
      <Banner />
      <div className='mx-auto max-w-screen-xl px-4 md:px-7'>
        {isLoading ? (
          <div className='grid grid-cols-1 gap-3 md:grid-cols-6 px-18 md:px-0 mt-6'>
            {Array.from({ length: 12 }).map(() => (
              <SkeletonCard />
            ))}
          </div>
        ) : (
          <>
            {/* Popular Movie */}
            <>
              {isDesktop ? (
                <DesktopDivider props={'Popular Movie'} />
              ) : (
                <MobileDivider props={'Popular Movie'} />
              )}

              <div className='grid grid-cols-1 gap-3 md:grid-cols-6 px-18 md:px-0'>
                {movieData.slice(0, 12).map((movie) => (
                  <MovieCard data={movie} />
                ))}
              </div>
              <Link href={`/lists/1`}>
                <div className='flex justify-center my-2 mt-6'>
                  <a
                    className='inline-block rounded-sm border border-red-900 bg-red-900 px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-gray-900 focus:ring-3 focus:outline-hidden'
                    href='#'
                  >
                    More &nbsp; →
                  </a>
                </div>
              </Link>
            </>

            {/* Action Movie */}
            <>
              {isDesktop ? (
                <DesktopDivider props={'Action Movie'} />
              ) : (
                <MobileDivider props={'Action Movie'} />
              )}

              <div className='grid grid-cols-1 gap-3 md:grid-cols-6 px-18 md:px-0'>
                {actionMovie.slice(0, 12).map((action) => (
                  <MovieCard data={action} />
                ))}
              </div>
            </>

            {/* Horror Movie */}
            <>
              {isDesktop ? (
                <DesktopDivider props={'Horror Movie'} />
              ) : (
                <MobileDivider props={'Horror Movie'} />
              )}

              <div className='grid grid-cols-1 gap-3 md:grid-cols-6 px-18 md:px-0'>
                {horrorMovie.slice(0, 12).map((horror) => (
                  <MovieCard data={horror} />
                ))}
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
}

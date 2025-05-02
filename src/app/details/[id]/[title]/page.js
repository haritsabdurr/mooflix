'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { baseUrl, baseImgUrl, posterHolderUrl } from '@/utils/baseUrl';
import { apiKey } from '@/utils/apiKey';
import { Duration, Rating, Released, Incoming } from '@/components/icons';
import { DesktopDivider, MobileDivider } from '@/components/divider';
import {
  SkeletonImg,
  SkeletonDetail,
  SkeletonCard,
} from '@/components/skeleton';
import MovieCard from '@/components/movieCard';
import axios from 'axios';

export default function Detail() {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [movieStatus, setMovieStatus] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getMoviebyId = async () => {
    try {
      const res = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
      setMovieDetail(res.data);
      setMovieGenre(res.data.genres);
      console.log(res.data);
      if (res.data.status == 'Released') {
        setMovieStatus(true);
      } else {
        setMovieStatus(false);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    } catch (err) {
      console.error('Error occured', err);
    }
  };

  const getSimilarMovie = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/movie/${id}/similar?api_key=${apiKey}`
      );
      setSimilar(res.data.results);
    } catch (err) {
      console.error('Error occured', err);
    }
  };

  useEffect(() => {
    getMoviebyId();
    getSimilarMovie();
  }, [id]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  return (
    <div className='mx-auto max-w-screen-xl px-4 md:px-7'>
      <div className='md:flex mt-12 gap-6'>
        {isLoading ? (
          <SkeletonImg />
        ) : (
          <img
            className='mx-auto h-[28rem] w-[20rem] md:h-[30rem] md:w-[24rem]'
            src={`${baseImgUrl}/${movieDetail.poster_path}`}
            alt={`${movieDetail.original_title} Poster`}
            onError={(e) => (e.currentTarget.src = posterHolderUrl)}
          />
        )}

        <div className='mt-4 md:mt-0'>
          {isLoading ? (
            <SkeletonDetail />
          ) : (
            <>
              <h1 className='text-center md:text-start text-3xl font-bold'>
                {movieDetail.original_title} {''}
                <span className='font-normal'>
                  | {String(movieDetail.release_date).substring(0, 4)}
                </span>
              </h1>
              <div className='flex justify-center md:justify-start gap-6 mt-2'>
                <div className='flex'>
                  <Rating />
                  <p className='ms-2'>
                    {Number(movieDetail.vote_average).toFixed(1)}/10
                  </p>
                </div>
                <div className='flex'>
                  <Duration />
                  <p className='ms-2'>{movieDetail.runtime} Minutes</p>
                </div>
                {movieStatus ? (
                  <div className='flex'>
                    <Released />
                    <p className='ms-2'>{movieDetail.status}</p>
                  </div>
                ) : (
                  <div className='flex'>
                    <Incoming />
                    <p className='ms-2'>{movieDetail.status}</p>
                  </div>
                )}
              </div>
              <div className='mt-6'>
                <p className='text-center md:text-start'>Synopsys :</p>
                <p className='text-center md:text-justify md:pe-54'>
                  {movieDetail.overview}
                </p>
              </div>
              <div className='flex justify-center md:justify-start gap-4 mt-4'>
                {movieGenre.map((genre) => (
                  <p className='bg-red-900 py-1 px-4 rounded-md text-gray-100 text-sm font-medium'>
                    {genre.name}
                  </p>
                ))}
              </div>
            </>
          )}

          <div>
            {isDesktop ? (
              <DesktopDivider props={'Similar Movie'} />
            ) : (
              <MobileDivider props={'Similar Movie'} />
            )}

            {isLoading ? (
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {Array.from({ length: 4 }).map(() => (
                  <SkeletonCard />
                ))}
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {similar.slice(0, 4).map((sim, index) => (
                  <MovieCard key={index} data={sim} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

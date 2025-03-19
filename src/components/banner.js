import Image from 'next/image';
import bannerimg from '@/asset/bannerimg.png';

export default function Banner() {
  return (
    <div className='bg-red-900'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-144 md:h-84 pb-12'>
        <div className='flex flex-col-reverse md:grid grid-cols-2 pt-10'>
          <div className='flex flex-col items-center md:items-start mt-12'>
            <h1 className='text-center md:text-start text-2xl text-gray-200 font-black'>
              Find Movie Recommendation Only at Mooflix!
            </h1>
            <p className='text-center md:text-start mt-2 text-gray-200'>
              Mooflix displays details of thousands of movies with various
              genres, years, and countries. find your favorite movie now!
            </p>
            <div className='flex justify-center my-2 mt-6'>
              <a
                className='inline-block rounded-sm border border-yellow-500 bg-yellow-500 px-10 py-2 text-sm font-medium text-gray-900 hover:bg-transparent hover:text-whitefocus:ring-3 focus:outline-hidden'
                href='#'
              >
                Explore &nbsp; →
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center ps-6 md:ps-32 pt-3'>
            <Image src={bannerimg} width={400} alt='Banner image' />
          </div>
        </div>
      </div>
    </div>
  );
}

import { baseImgUrl, posterHolderUrl } from '@/utils/baseUrl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MovieCard({ data }) {
  const router = useRouter();

  return (
    <Link
      href={`/details/${data.id}/${String(data.original_title).replace(
        /\s+/g,
        '-'
      )}`}
    >
      <div className='block rounded-lg p-2 border border-gray-300'>
        <div className='relative'>
          <img
            alt={posterHolderUrl}
            src={`${baseImgUrl}/${data.poster_path}`}
            onError={(e) => (e.currentTarget.src = posterHolderUrl)}
            className='h-64 md:h-56 w-full rounded-md object-cover'
          />

          <div className='flex items-center bg-gray-800/70 w-13 px-1 absolute top-0 left-21.5 md:left-15.5'>
            <svg
              className='me-1'
              viewBox='0 0 1024 1024'
              fill='gold'
              height='15px'
              width='15px'
            >
              <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' />
            </svg>
            <p className='text-white text-sm font-medium'>
              {Number(data.vote_average).toFixed(1)}
            </p>
          </div>
        </div>

        <div className='mt-2 px-1'>
          <div className='h-[60px] text-lg text-center text-gray-900 font-bold line-clamp-2'>
            {data.original_title} <br />
            <span className='font-normal'>
              ({String(data.release_date).substring(0, 4)})
            </span>
          </div>

          <div
            className='flex justify-center my-2'
            onClick={() =>
              router.push(
                `/details/${data.id}/${String(data.original_title).replace(
                  /\s+/g,
                  '-'
                )}`
              )
            }
          >
            <a
              className='inline-block rounded-sm border border-red-900 bg-red-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-transparent hover:text-gray-900 focus:ring-3 focus:outline-hidden'
              href='#'
            >
              See Detail
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}

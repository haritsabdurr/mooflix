export function SkeletonCard() {
  return (
    <div className='animate-pulse rounded-md bg-gray-200 p-4'>
      <div className='h-64 md:h-56 bg-gray-400 rounded-md'></div>
      <div className='mx-auto mt-3 h-4 w-3/4 bg-gray-400 rounded'></div>
      <div className='mx-auto mt-2 h-3 w-1/2 bg-gray-400 rounded'></div>
      <div className='mx-auto my-5 h-3 w-1/3 bg-gray-400 rounded'></div>
    </div>
  );
}

export function SkeletonImg() {
  return (
    <div className='animate-pulse'>
      <div className='bg-gray-400 h-[28rem] w-[20rem] md:h-[480px] md:w-[320px] mx-auto md:mx-0'></div>
    </div>
  );
}

export function SkeletonDetail() {
  return (
    <div className='animate-pulse space-y-3 md:w-[54rem]'>
      <div className='mx-auto md:mx-0 h-8 w-3/4 bg-gray-400 rounded'></div>
      <div className='mx-auto md:mx-0 h-6 w-1/2 bg-gray-400 rounded'></div>
      <div className='mx-auto md:mx-0 h-4 w-1/5 bg-gray-400 rounded'></div>
      <div className='mx-auto md:mx-0 h-20 w-3/4 bg-gray-400 rounded'></div>
    </div>
  );
}

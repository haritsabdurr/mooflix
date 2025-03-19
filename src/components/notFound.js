export default function NotFound() {
  return (
    <div className='text-center my-54'>
      <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Uh-oh!
      </p>

      <p className='mt-4 text-gray-500'>We can't find that movie.</p>

      <a
        href='/'
        className='mt-6 inline-block rounded-sm bg-red-900 px-5 py-3 text-sm font-medium text-white hover:bg-red-600 focus:ring-3 focus:outline-hidden'
      >
        Go Back Home
      </a>
    </div>
  );
}

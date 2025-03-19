export function DesktopDivider({ props }) {
  return (
    <span className='flex items-center my-6'>
      <span className='pr-6 font-bold'>{props}</span>
      <span className='h-px flex-1 bg-black'></span>
    </span>
  );
}

export function MobileDivider({ props }) {
  return (
    <span className='flex items-center my-6'>
      <span className='h-px flex-1 bg-black'></span>
      <span className='shrink-0 px-6 font-bold'>{props}</span>
      <span className='h-px flex-1 bg-black'></span>
    </span>
  );
}

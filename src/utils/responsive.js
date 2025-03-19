export default function Responsive(setIsDesktop) {
  const media = window.matchMedia('(min-width: 800px)');
  const listener = () => setIsDesktop(media.matches);
  listener();
  window.addEventListener('resize', listener);

  return () => window.removeEventListener('resize', listener);
}

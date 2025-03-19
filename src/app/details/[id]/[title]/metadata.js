export async function generateMetadata({ params }) {
  const { title } = await params;

  const formattedTitle = title.replaceAll('-', ' ');

  return {
    title: `Details | ${decodeURIComponent(formattedTitle)}`,
    description: `Details about ${decodeURIComponent(formattedTitle)} movie.`,
  };
}

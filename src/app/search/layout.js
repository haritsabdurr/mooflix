import { Suspense } from 'react';

export const metadata = {
  title: 'Movie Lists',
};

export default function Layout({ children }) {
  return (
    <>
      <Suspense>{children}</Suspense>
    </>
  );
}

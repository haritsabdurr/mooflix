import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: {
    template: '%s | Mooflix',
    default: 'Mooflix',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}

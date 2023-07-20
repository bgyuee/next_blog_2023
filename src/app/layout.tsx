import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Gyuyeop's Blog",
    template: "Gyuyeop's Blog | %s"
  },
  description: "프론트엔드 개발자 Gyuyeop's Blog",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <div id='wrap' className='flex flex-col my-0 mx-auto h-full lg:w-11/12'>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

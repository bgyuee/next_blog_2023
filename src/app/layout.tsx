import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "Gyuyeop's Blog",
  description: "Gyuyeop's Blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <div id='wrap' className='flex flex-col my-0 mx-auto h-full bg-rose-100 lg:w-11/12'>
          <Header />
          <main className='grow bg-slate-300'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

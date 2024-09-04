import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Marcel Claramunt',
  description: 'Marcel Claramunt\'s personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='bg-gray-900 text-gray-200'>
       <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className='min-h-screen flex flex-col'>
        <header className='bg-gray-800 p-4 shadow-md'>
          <nav className='container mx-auto flex justify-between items-center'>
            <a className='text-xl font-bold' href='/'>Marcel Claramunt</a>
            <ul className='flex space-x-4'>
              <li>
                <a href='/' className='hover:text-blue-300'>Home</a>
              </li>
              <li>
                <a href='/cv' className='hover:text-blue-300'>CV</a>
              </li>
              <li>
                <a href='/about' className='hover:text-blue-300'>About</a>
              </li>
              <li>
                <a href='/contact' className='hover:text-blue-300'>Contact</a>
              </li>
              {/* <li>
                <a href='/blog' className='hover:text-blue-300'>Blog</a>
              </li> */}
            </ul>
          </nav>
        </header>
        
        <main className='container mx-auto flex-grow p-6'>
          {children}
        </main>
      </body>
    </html>
  );
}

import { useState } from 'react';

import Footer from '@components/footer';
import NavBar from '@components/navbar';
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState(true);
  return (
    <div
      className={`${
        mode
          ? 'bg-gradient-to-r from-yellow-100 via-blue-300 to-blue-400 h-screen 2xl:h-screen lg:h-full transition duration-300 text-black overflow-hidden'
          : 'bg-gradient-to-l from-black via-gray-700 to-gray-600 h-screen 2xl:h-screen lg:h-full transition duration-300 text-white overflow-hidden'
      }`}
    >
      <div className='relative'>
        {mode ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-32 w-32 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 rounded-full -z-1 absolute  -translate-x-12 -translate-y-12 blur-sm  transition duration-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth='2'
          />
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-32 w-32 bg-gradient-to-r from-white to-transparent rounded-full -z-1 absolute  blur-sm -top-12 -right-12 transition duration-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth='2'
          />
        )}
      </div>
      <NavBar mode={mode} setMode={setMode} />
      <Component mode={mode} setMode={setMode} {...pageProps} />
      <Footer mode={mode} setMode={setMode} />
    </div>
  );
}

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
          ? 'relative z-1 before:bg-gradient-to-r before:from-yellow-100 before:via-blue-200 before:to-blue-500  transition duration-300 text-white overflow-hidden before:bg-fixed before:bg-center before:inset-0 before:fixed before:-z-1 before:content-[" "] before:top-0 before:left-0 before:w-full'
          : 'relative z-1 before:bg-gradient-to-l before:from-black before:via-gray-700 before:to-gray-600  transition duration-300 text-white overflow-hidden before:bg-fixed before:bg-center before:inset-0 before:fixed before:-z-1 before:content-[" "] before:top-0 before:left-0 before:w-full'
      }`}
    >
      <div className='relative'>
        {mode ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-72 w-72 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 rounded-full z-1 absolute delay-200 ease-out  sun -top-24 -left-24 blur-sm  transition duration-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth='2'
          />
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-72 w-72 bg-gradient-to-r from-white to-transparent rounded-full -z-1 absolute  blur-sm delay-200 ease-in-out moon -top-24 -right-24 transition duration-700'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth='2'
          />
        )}
      </div>
      <NavBar mode={mode} setMode={setMode} />
      <div className=''>
        <Component mode={mode} setMode={setMode} {...pageProps} />
      </div>
      <Footer mode={mode} setMode={setMode} />
    </div>
  );
}

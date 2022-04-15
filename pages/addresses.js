/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';

import { Oval } from 'react-loader-spinner';

import Script from 'next/script';

export default function Addresses({ mode, setMode }) {
  const [loading, setLoading] = useState(true);
  // fetching data from kit fontawesome
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://kit.fontawesome.com/0c15724ba9.js')
        .then((data) => {
          console.log(data);
          setLoading(false);
        })
        .catch((error) => {
          return error;
        });
      return response;
    }
    getData();
  }, []);

  const colors = mode ? '1px 2px 2px black' : '2px 4px 2px red';
  const shadowText = mode ? '1px 1px 2px gray' : '1px 2px 2px red';
  const colorsText = mode ? 'black' : 'white';
  return (
    // Addresses section
    <section className='mt-2 h-screen'>
      {loading ? (
        <main className='relative mx-auto max-w-screen-md  '>
          <section
            style={{ top: '50%' }}
            tabIndex='11'
            className={`container mx-auto text-center mt-32 mb-32  ${
              mode
                ? 'bg-cyan-100 rounded-lg border-b-4 border-blue-700'
                : 'bg-black rounded-lg border-b-4 border-white'
            }`}
          >
            <header
              style={{ textShadow: colors }}
              className={`text-6xl p-4 font-bold  underline first-letter:text-7xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
            >
              Let's work together...
            </header>
            <section className='grid grid-cols-1 gap-2  place-items-center'>
              <div className='p-4 flex flex-col'>
                <div className='grid grid-rows-1 grid-flow-col gap-4 place-items-center'>
                  <Oval
                    ariaLabel='loading'
                    color='black'
                    height={40}
                    width={40}
                    timeout={3000}
                  />{' '}
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold  first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    - here you can connect to me!{' '}
                  </h2>{' '}
                </div>

                <div className='grid grid-rows-1 grid-flow-col place-items-center'>
                  {' '}
                  <Oval
                    ariaLabel='loading'
                    color='black'
                    height={40}
                    width={40}
                    timeout={3000}
                  />{' '}
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold  first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    - let's get project together!
                  </h2>
                </div>

                <div className='grid grid-rows-1 grid-flow-col gap-4 place-items-center'>
                  <Oval
                    ariaLabel='loading'
                    color='black'
                    height={40}
                    width={40}
                    timeout={3000}
                  />{' '}
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    - U can contact to me here.
                  </h2>{' '}
                </div>

                <div className='grid grid-rows-1 grid-flow-col gap-4 place-items-center'>
                  <Oval
                    ariaLabel='loading'
                    color='black'
                    height={40}
                    width={40}
                    timeout={3000}
                  />{' '}
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    - I've posted my projects.
                  </h2>{' '}
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-4 place-items-center'>
                  <Oval
                    ariaLabel='loading'
                    color='black'
                    height={40}
                    width={40}
                    timeout={3000}
                  />
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    - That's my email.{' '}
                  </h2>
                </div>
              </div>
            </section>
          </section>
        </main>
      ) : (
        <main className='relative mx-auto max-w-screen-md  '>
          <section
            style={{ top: '50%' }}
            tabIndex='11'
            className={`container mx-auto text-center mt-32 mb-32  ${
              mode
                ? 'bg-cyan-100 rounded-lg border-b-4 border-blue-700'
                : 'bg-black rounded-lg border-b-4 border-white'
            }`}
          >
            <header
              style={{ textShadow: colors }}
              className={`text-6xl p-4 font-bold  underline first-letter:text-7xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
            >
              Let's work together...
            </header>
            <section className='grid grid-cols-1 gap-2  place-items-center'>
              <div className='p-4 flex flex-col'>
                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold  first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    Vkontakte
                    <a
                      rel='noreferrer'
                      className='border-blue-500 m-3 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                      href='https://vk.com/id46420996'
                      target='_blank'
                      tabIndex='12'
                    >
                      <i className='fab fa-vk text-3xl'></i>
                    </a>{' '}
                    - here you can connect to me!{' '}
                  </h2>{' '}
                </div>

                <div className='grid grid-rows-1 grid-flow-col'>
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold  first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    Facebook
                    <a
                      rel='noreferrer'
                      className='border-blue-500 m-3 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                      href='https://www.facebook.com/mihaleksval'
                      target='_blank'
                      tabIndex='13'
                    >
                      <i className='fab fa-facebook text-3xl'></i>
                    </a>
                    - let's get project together!
                  </h2>
                </div>

                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    {' '}
                    Soundcloud
                    <a
                      rel='noreferrer'
                      className='border-blue-500 m-3 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                      href='https://soundcloud.com/erkiel-puaro'
                      target='_blank'
                      tabIndex='14'
                    >
                      <i className='fab fa-soundcloud text-3xl'></i>
                    </a>{' '}
                    - U can contact to me here.
                  </h2>{' '}
                </div>

                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    Gitgub{' '}
                    <a
                      rel='noreferrer'
                      className='border-blue-500 m-3 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                      href='https://github.com/DantesSagan'
                      target='_blank'
                      tabIndex='15'
                    >
                      <i className='fab fa-github text-3xl'></i>
                    </a>
                    - I've posted my projects.
                  </h2>{' '}
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                  <h2
                    style={{ color: colorsText, textShadow: shadowText }}
                    className={`text-xl p-4 font-bold first-letter:text-4xl first-letter:font-bold first-letter:text-white transition duration-300 text-white`}
                  >
                    <a
                      rel='noreferrer'
                      className='border-blue-500 m-3 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75 col-span-2'
                      href='mailto:mihaleksva@gmail.com'
                      target='_blank'
                      tabIndex='16'
                    >
                      <i className='fas fa-at text-3xl'></i>
                    </a>
                    - {` `}That's my email.{' '}
                  </h2>{' '}
                </div>
              </div>
            </section>
          </section>
        </main>
      )}
      <Script
        crossOrigin='anonymous'
        src='https://kit.fontawesome.com/0c15724ba9.js'
        strategy='afterInteractive'
      />
    </section>
  );
}

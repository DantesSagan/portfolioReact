import Footer from './components/footer';
import NavBar from './components/navbar';

import Script from 'next/script';
export default function Addresses() {
  return (
    // Addresses section
    <div className='bg-gradient-to-r from-white via-blue-400 to-blue-300 h-screen'>
      <NavBar />
      <main className='relative mx-auto max-w-screen-md mt-12 xl:mt-44 2xl:mt-52'>
        <section
          tabIndex='11'
          className='container mx-auto max-w-screen-sm text-center bg-cyan-100 rounded-lg border-b-4 border-blue-700'
        >
          <div id='dvsection' className='inset-0'>
            <header
              id='profile-header'
              className='text-4xl p-4 font-bold underline'
            >
              {`Let's work together...`}
            </header>
            <div className='p-4 contact-link grid grid-cols-2 gap-4 place-items-center'>
              <a
                rel='noreferrer'
                className='border-2 border-blue-500 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                href='https://vk.com/id46420996'
                target='_blank'
                tabIndex='12'
              >
                <i className='fab fa-vk text-5xl'></i>
                <br />
                Vkontakte
              </a>
              <a
                rel='noreferrer'
                className='border-2 border-blue-500 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                href='https://www.facebook.com/mihaleksval'
                target='_blank'
                tabIndex='13'
              >
                <i className='fab fa-facebook text-5xl'></i> <br />
                Facebook
              </a>
              <a
                rel='noreferrer'
                className='border-2 border-blue-500 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                href='https://soundcloud.com/erkiel-puaro'
                target='_blank'
                tabIndex='14'
              >
                <i className='fab fa-soundcloud text-5xl'></i> <br />
                Soundcloud
              </a>
              <a
                rel='noreferrer'
                className='border-2 border-blue-500 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75'
                href='https://github.com/DantesSagan'
                target='_blank'
                tabIndex='15'
              >
                <i className='fab fa-github text-5xl'></i>
                <br />
                Github
              </a>
              <a
                rel='noreferrer'
                className='border-2 border-blue-500 rounded-lg p-2 hover:opacity-75 transition duration-300 active:scale-75 col-span-2'
                href='mailto:mihaleksva@gmail.com'
                target='_blank'
                tabIndex='16'
              >
                <i className='fas fa-at text-5xl'></i>
                <br />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />{' '}
      <Script
        src='https://kit.fontawesome.com/0c15724ba9.js'
        crossorigin='anonymous'
        strategy='lazyOnload'
      />
    </div>
  );
}

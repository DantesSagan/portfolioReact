import Image from 'next/image';
import { useEffect, useRef } from 'react'
export default function Greet({ mode, setMode }) {
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  if (typeof window !== 'undefined') {
    console.log('not');
  } else {
    console.log('server');
  }

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current = window.innerWidth >= 1900
  //     ? 'scale-100'
  //     : window.innerWidth >= 1600
  //       ? 'scale-100'
  //       : window.innerWidth >= 1536
  //         ? 'scale-75'
  //         : window.innerWidth >= 1400
  //           ? 'scale-75'
  //           : window.innerWidth >= 1200
  //             ? 'scale-75'
  //             : window.innerWidth >= 800
  //               ? 'scale-75'
  //               : window.innerWidth >= 600
  //                 ? 'scale-75'
  //                 : window.innerWidth >= 425
  //                   ? 'scale-75'
  //                   : window.innerWidth >= 375
  //                     ? 'scale-75'
  //                     : window.innerWidth >= 320
  //                       ? 'scale-75'
  //                       : 'scale-75';
  // }, [ref]);

  // console.log(ref.current)


  // const resWidth =
  //   window.innerWidth >= 1900
  //     ? 'scale-100'
  //     : window.innerWidth >= 1600
  //       ? 'scale-100'
  //       : window.innerWidth >= 1536
  //         ? 'scale-75'
  //         : window.innerWidth >= 1400
  //           ? 'scale-75'
  //           : window.innerWidth >= 1200
  //             ? 'scale-75'
  //             : window.innerWidth >= 800
  //               ? 'scale-75'
  //               : window.innerWidth >= 600
  //                 ? 'scale-75'
  //                 : window.innerWidth >= 425
  //                   ? 'scale-75'
  //                   : window.innerWidth >= 375
  //                     ? 'scale-75'
  //                     : window.innerWidth >= 320
  //                       ? 'scale-75'
  //                       : 'scale-100';
  //                       console.log(window.innerWidth);
  return (
    // Greeting section
    <main
      className={`relative mx-auto max-w-screen-md h-1/2 marginSM`}
    >
      <section
        className='container mx-auto text-center w-3/4 static text-slate-100 subpixel-antialiased'
        tabIndex='2'
      >
        <div className='scale-90'>
          <Image
            quality='100'
            placeholder='blur'
            width={550}
            height={550}
            priority
            blurDataURL={rgbDataURL(30, 144, 255)}
            layout='responsive'
            className={`rounded-full ${mode
              ? 'hover:bg-blue-400 hover:scale-95 transition duration-700'
              : 'bg-gradient-to-b from-white/60 via-red-600/60 to-transparent hover:bg-white hover:via-white hover:to-white hover:scale-95 transition duration-700'
              }`}
            alt='alex'
            src='/images/голова_с_очками-3-removebg.png'
          />
          <div id='card' className={`h-full w-full  `}>
            <h1 className='text-4xl'>
              <div
                style={{ textShadow: '1px 1px 2px black' }}
                className={`${mode
                  ? 'first-letter:text-7xl first-letter:font-bold first-letter:text-white transition duration-300 text-white '
                  : 'first-letter:text-7xl first-letter:font-bold first-letter:text-white transition duration-300 text-white '
                  }`}
              >
                Hello im Alexsander Mikhaylov
              </div>
            </h1>
            <div
              style={{ textShadow: '1px 1px 2px black' }}
              className={`p-2 ${mode
                ? 'text-white transition duration-300 '
                : 'text-white transition duration-300 '
                }`}
            >
              <em className='text-2xl'>a Frontend-developer</em>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

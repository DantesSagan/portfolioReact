import Image from 'next/image';

export default function Greet() {
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  return (
    // Greeting section
    <main className='relative mx-auto max-w-screen-md mt-12 marginSM'>
      <section
        className='container mx-auto text-center w-3/4 inset-0 text-slate-100 subpixel-antialiased'
        tabIndex='2'
      >
        <div className='WLC-section'>
          <Image
            quality='100'
            placeholder='blur'
            width={550}
            height={550}
            priority
            blurDataURL={rgbDataURL(30, 144, 255)}
            layout='responsive'
            className='rounded-full hover:bg-blue-400 hover:scale-95 duration-700'
            alt='alex'
            src='/images/голова_с_очками-3-removebg.png'
          />
          <div id='card' className='h-full w-full '>
            <h1 className='text-4xl'>
              <div className='first-letter:text-7xl first-letter:font-bold first-letter:text-white '>
                Hello im Alexsander Mikhaylov
              </div>
            </h1>
            <div className='p-2'>
              <em className='text-2xl'>a web developer</em>
              <br />
              <em className='text-2xl'>React.js</em>
              <br />
              <em className='text-2xl'>JS</em>
              <br />
              <em className='text-2xl'>HTML</em>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function Project({ mode, setMode }) {
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
    // Project Section
    <main className='relative mx-auto max-w-screen-sm mt-2'>
      {' '}
      <section
        className={`container mx-auto text-center scale-90 ${
          mode
            ? 'bg-cyan-100 rounded-lg border-b-4 border-blue-700'
            : 'bg-black rounded-lg border-b-4 border-white'
        } `}
        tabIndex='5'
      >
        <div className='grid grid-cols-2 gap-1 place-items-center'>
          <div
            className='text-3xl md:text-2xl p-4 font-bold underline col-span-2'
            style={{ textShadow: '1px 1px 2px black' }}
          >
            Some projects
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 block m-auto mt-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
          </div>
          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/Instagram_clone_by_me'
              target='_blank'
              tabIndex='6'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                quality='100'
                width='128'
                height='128'
                alt='instagram_clone'
                src='/images/projects/instTwo.png'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                Instagram
              </div>
            </a>
          </div>

          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/simple-form'
              target='_blank'
              tabIndex='7'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                quality='100'
                width='128'
                height='128'
                alt='survey_form'
                src='/images/projects/survey_formTwo.png'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                Survey-form
              </div>
            </a>
          </div>

          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/ToDoList'
              target='_blank'
              tabIndex='8'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                quality='100'
                width='128'
                height='128'
                alt='instagram_clone'
                src='/images/projects/todolist.png'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                ToDoList
              </div>
            </a>
          </div>

          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/pomodoro'
              target='_blank'
              tabIndex='9'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                quality='100'
                width='128'
                height='128'
                alt='instagram_clone'
                src='/images/projects/pomodoroTwo.png'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                Pomodoro
              </div>
            </a>
          </div>

          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/calculator'
              target='_blank'
              tabIndex='10'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                quality='100'
                width='128'
                height='128'
                alt='instagram_clone'
                src='/images/projects/calculatorTwo.png'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                Calculator
              </div>
            </a>
          </div>

          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/drum-machine'
              target='_blank'
              tabIndex='11'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='instagram_clone'
                src='/images/projects/drum_machineTwo.png'
                quality='100'
                width='128'
                height='128'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                Drum Machine
              </div>
            </a>
          </div>

          <div className='p-2 2xl:p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/d3VisFiveFCC'
              target='_blank'
              tabIndex='12'
            >
              <Image
                className='object-cover rounded-3xl border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                quality='100'
                width='128'
                height='128'
                alt='instagram_clone'
                src='/images/projects/treemapTwo.png'
                blurDataURL={rgbDataURL(30, 144, 255)}
                placeholder='blur'
              />
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                TreeMap
              </div>
            </a>
          </div>

          <div className='border-b-2 border-white p-2 2xl:p-2 hover:border-b-2 hover:border-blue-500 rounded-lg'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan'
              target='_blank'
              tabIndex='13'
            >
              <div
                className='text-xl font-bold'
                style={{ textShadow: '1px 1px 2px black' }}
              >
                And more....
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

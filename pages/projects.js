import Footer from './components/footer';
import NavBar from './components/navbar';

export default function Project() {
  return (
    // Project Section
    <div className='bg-gradient-to-r from-white via-blue-400 to-blue-300 h-screen'>
      <NavBar />
      <section
        className='mt-2 mx-auto max-w-screen-sm text-center bg-cyan-100 rounded-lg border-b-4 border-blue-700'
        tabIndex='5'
      >
        <div className='text-3xl p-4 font-bold underline'>
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
        <div className='grid grid-cols-2 gap-1 place-items-center'>
          <div className='p-2 cn'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/Instagram_clone_by_me'
              target='_blank'
              tabIndex='6'
            >
              <img
                className={`object-cover rounded-3xl h-32 w-32  border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75`}
                alt='instagram_clone'
                src='images/projects/inst.png'
              />
              <span className='text-xl font-bold'>Instagram</span>
            </a>
          </div>

          <div className='p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/simple-form'
              target='_blank'
              tabIndex='7'
            >
              <img
                className='object-cover rounded-3xl h-32 w-32 border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='survey_form'
                src='images/projects/survey_form.png'
              />
              <span className='text-xl font-bold'>Survey-form</span>
            </a>
          </div>

          <div className='p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/ToDoList'
              target='_blank'
              tabIndex='8'
            >
              <img
                className='object-cover rounded-3xl h-32 w-32 border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='instagram_clone'
                src='images/projects/todolist.png'
              />
              <span className='text-xl font-bold'>ToDoList</span>
            </a>
          </div>

          <div className='p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/pomodoro'
              target='_blank'
              tabIndex='9'
            >
              <img
                className='object-cover rounded-3xl h-32 w-32 border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='instagram_clone'
                src='images/projects/pomodoro.png'
              />
              <span className='text-xl font-bold'>Pomodoro</span>
            </a>
          </div>

          <div className='p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/calculator'
              target='_blank'
              tabIndex='10'
            >
              <img
                className='object-cover rounded-3xl h-32 w-32 border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='instagram_clone'
                src='images/projects/calculator.png'
              />
              <span className='text-xl font-bold'>Calculator</span>
            </a>
          </div>

          <div className='p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/drum-machine'
              target='_blank'
              tabIndex='11'
            >
              <img
                className='object-cover rounded-3xl h-32 w-32 border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='instagram_clone'
                src='images/projects/drum_machine.png'
              />
              <span className='text-xl font-bold'>
                Drum
                <br /> Machine
              </span>
            </a>
          </div>

          <div className='p-2'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan/d3VisFiveFCC'
              target='_blank'
              tabIndex='12'
            >
              <img
                className='object-cover rounded-3xl h-32 w-32 border-2 border-blue-500 hover:opacity-75 transition duration-300 active:scale-75'
                alt='instagram_clone'
                src='images/projects/treemap.png'
              />
              <span className='text-xl font-bold'>TreeMap</span>
            </a>
          </div>

          <div className='border-b-2 border-white p-2 col-span-2 hover:border-b-2 hover:border-blue-500 rounded-lg'>
            <a
              rel='noreferrer'
              href='https://github.com/DantesSagan'
              target='_blank'
              tabIndex='13'
            >
              <span className='text-xl font-bold'>And more....</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

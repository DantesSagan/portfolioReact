export default function Project() {
  return (
    // Project Section
    <section
      className='mt-4 mx-auto max-w-screen-sm text-center bg-cyan-100 rounded-lg'
      tabIndex='5'
    >
      <h2 className='text-3xl p-4 font-bold'>Some projects</h2>
      <div className='grid grid-cols-2 gap-3 place-items-center'>
        <div className='p-2'>
          <a
            rel='noreferrer'
            href='https://github.com/DantesSagan/Instagram_clone_by_me'
            target='_blank'
            tabIndex='6'
          >
            <img
              className='object-cover rounded-3xl h-32 w-32'
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
              className='object-cover rounded-3xl h-32 w-32'
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
              className='object-cover rounded-3xl h-32 w-32'
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
              className='object-cover rounded-3xl h-32 w-32'
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
              className='object-cover rounded-3xl h-32 w-32'
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
              className='object-cover rounded-3xl h-32 w-32'
              alt='instagram_clone'
              src='images/projects/drum_machine.png'
            />
            <span className='text-xl font-bold'>Drum Machine</span>
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
              className='object-cover rounded-3xl h-32 w-32'
              alt='instagram_clone'
              src='images/projects/treemap.png'
            />
            <span className='text-xl font-bold'>
              TreeMap
              <br />
              Diagram
            </span>
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
  );
}

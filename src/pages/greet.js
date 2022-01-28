export default function Greet() {
  return (
    // Greeting section
    <section
      className='container mx-auto text-center w-3/4 inset-0 text-slate-100 subpixel-antialiased'
      tabIndex='2'
    >
      <div className='WLC-section'>
        <img
          className='rounded-full'
          alt='alex'
          src='/images/голова_с_очками-3-removebg.png'
        />
        <div id='card'>
          <h1 className='text-4xl'>
            <strong>Hello i'm Alexsander Mikhaylov</strong>
          </h1>
          <div className='p-2'>
            <em className='text-2xl'>a web developer</em>
            <br />
            <em className='text-2xl'>React.js</em>
            <br />
            <em className='text-2xl'>Vue.js</em>
          </div>
        </div>
      </div>
    </section>
  );
}

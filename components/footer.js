export default function Footer({ mode, setMode }) {
  return (
    <footer
      className='relative'
      id='profile-footer'
      tabIndex='17'
    >
      <div
        style={{ textShadow: '1px 1px 2px black' }}
        className={`fixed inset-x-0 bottom-0 ${
          mode
            ? 'items-center align-center text-center bg-blue-500 mx-auto max-w-screen-lg lg:max-w-screen-sm md:max-w-screen-sm sm:max-w-screen-sm rounded-t-lg text-white border-t-2 border-white'
            : 'items-center align-center text-center bg-red-600 mx-auto max-w-screen-lg lg:max-w-screen-sm md:max-w-screen-sm sm:max-w-screen-sm rounded-t-lg text-white border-t-2 border-white'
        }`}
      >
        <p>Alexsander @DantesSagan</p>
      </div>
    </footer>
  );
}

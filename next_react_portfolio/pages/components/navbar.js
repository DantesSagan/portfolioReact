import Link from 'next/link';
import * as ROUTES from '../../constants/routes';

export default function NavBar() {
  return (
    <nav
      className='items-center align-center text-center bg-blue-500 mx-auto max-w-screen-lg lg:max-w-screen-sm md:max-w-screen-sm sm:max-w-screen-sm rounded-b-lg text-white border-b-2'
      tabIndex='1'
    >
      {/* <!--Start link-box--> */}
      <div
        id='nav-link-box'
        className='inline-block text-3xl lg:block md:block sm:block'
      >
        <Link href={ROUTES.MAIN} className='transition duration-700 p-4'>
          <button
            tabIndex='2'
            type='button'
            className='border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-white transition duration-700 hover:border-b-2 hover:border-white'
          >
            About me
          </button>
        </Link>
        {` `}
        <Link href={ROUTES.PROJECTS} className='transition duration-700 p-4'>
          <button
            tabIndex='3'
            type='button'
            className='border-b-2 border-blue-500  focus:outline-none focus:border-b-2 focus:border-white transition duration-700 hover:border-b-2 hover:border-white'
          >
            Works
          </button>
        </Link>
        {` `}
        <Link
          href={ROUTES.ADDRESSES}
          className='transition duration-700 p-4'
          aria-selected='false'
        >
          <button
            tabIndex='4'
            type='button'
            className='border-b-2 border-blue-500  focus:outline-none focus:border-b-2 focus:border-white transition duration-700 hover:border-b-2 hover:border-white'
          >
            Contacts
          </button>
        </Link>
      </div>
      {/* <!--End link-box--> */}
    </nav>
  );
}

import { useEffect } from 'react';
import * as d3 from 'd3';

import Link from 'next/link';
import * as ROUTES from '@constants/routes';

export default function NavBar({ mode, setMode }) {
  // const circles = () => {
  //   // create svg element:
  //   var svg = d3
  //     .select('#circle')
  //     .append('svg')
  //     .attr('width', 400)
  //     .attr('height', 400);

  //   // Add the path using this helper function
  //   return svg
  //     .append('circle')
  //     .attr('cx', 100)
  //     .attr('cy', 100)
  //     .attr('r', 50)
  //     .attr('stroke', 'black')
  //     .attr('fill', '#69a3b2');
  // };
  // useEffect(() => {
  //   circles();
  // }, []);

  return (
    <nav
      className={`navbar relative items-center align-center text-center  mx-auto max-w-screen-lg lg:max-w-screen-sm md:max-w-screen-sm sm:max-w-screen-sm rounded-b-lg p-2  ${
        mode
          ? 'text-white bg-blue-500 border-b-2'
          : 'text-white bg-red-600 border-b-2'
      }`}
      tabIndex='1'
    >
      {/* <!--Start link-box--> */}
      <div
        id='nav-link-box'
        className='inline-block text-3xl lg:block md:block sm:block'
      >
        <Link
          href={ROUTES.MAIN}
          passHref
          className='transition-all duration-700 p-4'
        >
          <button
            style={{ textShadow: '1px 1px 2px black' }}
            tabIndex='2'
            type='button'
            className={` ${
              mode
                ? 'border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2'
                : 'border-b-2 border-red-600 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2'
            }`}
          >
            About me
          </button>
        </Link>
        {` `}
        <Link
          href={ROUTES.PROJECTS}
          className='transition-all duration-700 p-4'
          passHref
        >
          <button
            style={{ textShadow: '1px 1px 2px black' }}
            tabIndex='3'
            type='button'
            className={` ${
              mode
                ? 'border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2'
                : 'border-b-2 border-red-600 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2'
            }`}
          >
            Works
          </button>
        </Link>
        {` `}
        <Link
          href={ROUTES.ADDRESSES}
          className='transition-all duration-700 p-4'
          aria-selected='false'
          passHref
        >
          <button
            style={{ textShadow: '1px 1px 2px black' }}
            tabIndex='4'
            type='button'
            className={` ${
              mode
                ? 'border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2'
                : 'border-b-2 border-red-600 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2 '
            }`}
          >
            Contacts
          </button>
        </Link>
        <span
          className='cursor-pointer pl-2 relative'
          onClick={() => setMode(!mode)}
        >
          {mode ? (
            <div className='rounded-lg bg-blue-500 border border-white inline-block justify-center pr-12 pl-0 transition-all duration-700'>
              <button className='scale-75 rounded-lg box-border p-1 border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2 float-left'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-full'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='white'
                  strokeWidth='2'
                />
              </button>
            </div>
          ) : (
            <div className='rounded-lg bg-black border border-white  inline-block justify-center pr-0 pl-12 transition-all duration-700'>
              <button className='scale-75 rounded-lg  box-border p-1 border-b-2 border-red-600 focus:outline-none focus:border-b-2 focus:border-white transition-all duration-700 hover:border-b-2 hover:border-white border-r-2 pr-2 float-right'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 bg-gradient-to-r from-white to-transparent rounded-full'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                />
              </button>
            </div>
          )}
        </span>
      </div>
      {/* <!--End link-box--> */}
    </nav>
  );
}

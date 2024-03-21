import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const location = useLocation();
  const isPathPublish = location.pathname === '/publish';

  const handleClick = () => {
    logout();
  };

  return (
    <nav className='fixed top-0 z-50 w-full'>
      <span
        id='navbar'
        className='absolute w-full h-full transition-colors duration-300 sm:black sm:gradient-mask-b-0 -z-10 sm:duration-500'></span>
      <div className='px-5 py-5 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start rtl:justify-end'>
            <Link
              to='/'
              className='flex items-center'>
              <img
                src={logo}
                className='h-8 rounded-full me-3'
                alt='Audory Logo'
              />
              <span className='self-center text-xl font-semibold sm:text-3xl whitespace-nowrap dark:text-white'>
                Audory
              </span>
            </Link>
          </div>
          
          
          <div className='flex justify-center items-center gap-5'>
          {!isPathPublish && (
            <Link to="/publish">
              <div class='relative sm:inline-flex  group hidden'>
              <div class='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#7338c6] via-[#1432b8] to-[#41a2c2] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
              <a
                href='/publish'
                title='Upload your idea'
                class='relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 rounded-xl '
                role='button'>
                Upload your idea
              </a>
            </div>
            </Link>
          )}
            <div>
              {user && (
                <div class='relative inline-block text-left dropdown '>
                  <span class='rounded-md shadow-sm '>
                    <button
                      class='self-center relative inline-flex items-center justify-between p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-indigo-900 group-hover:from-purple-600 group-hover:to-indigo-90'
                      type='button'
                      aria-haspopup='true'
                      aria-expanded='true'
                      aria-controls='headlessui-menu-items-117'>
                      <span className='flex bg-gray-900 justify-between w-full gap-4 relative px-4 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0'>
                        {user.name}
                        <svg
                          class='w-5 h-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'>
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clipRule='evenodd'></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <div class='opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'>
                    <div
                      class='absolute right-0 w-56 mt-2 origin-top-right [background:radial-gradient(125%_125%_at_50%_10%,#000_55%,#4c00a3_100%)] border border-gray-700 text-white divide-y divide-gray-400 rounded-md shadow-2xl outline-none'
                      aria-labelledby='headlessui-menu-button-1'
                      id='headlessui-menu-items-117'
                      role='menu'>
                      <div class='px-4 py-3'>
                        <p class='text-sm leading-5'>Signed in as</p>
                        <p class='text-xs font-medium leading-5 text-gray-400 truncate'>
                          {user.email}
                        </p>
                      </div>
                      <div class='py-1'>
                        <a
                          href='javascript:void(0)'
                          tabindex='0'
                          class='text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left transition-colors duration-300 hover:bg-gray-600/30'
                          role='menuitem'>
                          Profile
                        </a>
                        <a
                          href='javascript:void(0)'
                          tabindex='1'
                          class='text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left transition-colors duration-300 hover:bg-gray-600/30'
                          role='menuitem'>
                          Settings
                        </a>
                      </div>
                      <div class='py-1'>
                        <button
                          onClick={handleClick}
                          tabindex='3'
                          class='text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left transition-colors duration-300 hover:bg-gray-600/30'
                          role='menuitem'>
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

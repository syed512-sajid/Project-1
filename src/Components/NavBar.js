import React, { useState } from 'react';
import Logo from '../assests/Logo.jpg' 
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 '>
          <img src={Logo} className="h-8 ml-4" alt='Logo' />
          <button onClick={toggle} className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:right-2 focus:ring-gray-200'>
            <AiOutlineMenuUnfold className='text-orange-400 text-lg' />
          </button>

          <div></div>

          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isOpen ? 'bg-orange-100 bg-opacity-70' : ''}`}>

              <li>
                <Link spy={true} to='Home' activeClass='activeClass'>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700'>Home</div>
                </Link>
              </li>

              <li>
                <Link spy={true} to='Overview'>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700'>About</div>
                </Link>
              </li>

              <li>
                <Link spy={true} to='Projects'>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700'>Projects</div>
                </Link>
              </li>

              <li>
                <Link spy={true} to='Contact'>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-600 text-violet-700'>Contact</div>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

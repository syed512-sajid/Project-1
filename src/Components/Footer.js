import React from 'react';
import { GrLinkedinOption, GrMail } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <div className='w-screen bg-black'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
          <div className='flex'>
            <a href='https://www.linkedin.com/in/sajid-abbas-9a0b2a245/' target='_blank' rel='noopener noreferrer' className='text-lg flex flex-row text-violet-300'>
              <div className='h-[30px] rounded-full justify-center items-center bg-violet-400'><GrLinkedinOption className='text-white' /></div>
              <span className='text-white ml-1 mt-[0.1rem]'>Sajid Abbas</span>
            </a>

            <span className="mx-20"></span>

            <a href='mailto:sajidabbas6024@gmail.com' target='_blank' rel='noopener noreferrer' className='text-lg flex flex-row text-violet-300'>
              <div className='h-[30px] rounded-full justify-center items-center bg-violet-400'><GrMail className='text-white' /></div>
              <span className='text-white ml-1 mt-[0.1rem]'>Email</span>
            </a>

            <span className="mx-20"></span>

            <a href='tel:+923099696024' target='_blank' rel='noopener noreferrer' className='text-lg flex flex-row text-violet-300'>
              <div className='h-[30px] rounded-full justify-center items-center bg-violet-400'><BiSolidPhoneCall className='text-white' /></div>
              <span className='text-white ml-1 mt-[0.1rem]'>+923099696024</span>
            </a>

            <span className="mx-20"></span>

            <a href='https://github.com/your-github-username' target='_blank' rel='noopener noreferrer' className='text-lg flex flex-row text-violet-300'>
              <div className='h-[30px] rounded-full justify-center items-center bg-violet-400'><FaGithub className='text-white' /></div>
              <span className='text-white ml-1 mt-[0.1rem]'>Coming Soon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

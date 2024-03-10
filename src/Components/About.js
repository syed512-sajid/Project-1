import React from "react";
import { Styles } from "../utils/Style";
import Profile from "../assests/Profile.jpg";
import Resume from "../assests/Resume.pdf";
import { TiArrowDownOutline } from "react-icons/ti";
import "../App.css";

function About() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-10" id="Home">
      <div className="flex-1 py-4 text-center">
        <span className={`${Styles.HeroHeadText} text-4xl font-bold text-gray-800`}>
          Hi, I'm <span className="text-orange-600">Sajid</span>
        </span>
        <br />
        <span className={`${Styles.heroSubText} text-lg text-gray-600`}>
          I am a Frontend Developer &
          <br />
          Web Designer
        </span>
        <br />
        <div className="w-[14rem]"></div>
        <a href={Resume} download="Resume" target="_blank" rel="noreferrer">
        <div className="p-4 mt-9 w-[14rem] rounded-xl text-orange-500 flex justify-center border-2 shadow-lg border-orange-500 hover:border-violet-500 hover:shadow-pink-500" style={{ marginLeft: '14rem' }}>
  <TiArrowDownOutline className='text-lg mt-1 text-orange-500' /> Resume
</div>


        </a>
      </div>

      <div className='flex flex-wrap'>
        {/* Other content on the left side */}
        <div className='flex-grow'>
          {/* Empty div to push the image to the right */}
        </div>

        <div className='flex-none'>
          <img src={Profile} alt='profile' className='element object-contain p-4 w-120 h-96' />
          {/* Adjust the width (w-96) and height (h-96) according to your preference */}
        </div>
      </div>
    </div>
  );
}

export default About;

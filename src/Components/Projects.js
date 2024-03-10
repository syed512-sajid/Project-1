import React from "react";
import { Styles } from "../utils/Style";
import { project } from "../Constants";
import Tilt from 'react-parallax-tilt';
import { SiFirebase, SiGithub } from 'react-icons/si';

function Projects() {
  return (
    <div>
      <div className="flex-row items-center pl-5 justify-center pt-3 " id="Projects">
        <h1 className={`${Styles.sectionHeadText} text-4xl font-bold`}>
          Projects
        </h1>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </div>
      </div>
      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {project.map((proj) => (
          <Tilt key={proj.name} className="w-[350px] h-[400px] flex flex-col justify-evenly shadow-2xl items-center m-10 hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900">
            {/* Square container for description, name, and icon */}
            <div className="flex flex-col justify-between items-center">
              <div className="flex justify-center items-center mb-3">
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                  <a href={proj.firebase_link} target="_blank" rel="noopener noreferrer">
                    <SiFirebase className="text-3xl font-bold text-violet-600" />
                  </a>
                </div>
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                  <a href={proj.github_link} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-3xl font-bold text-violet-600" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <span className="text-orange-500">{proj.description}</span>
              </div>
              <div className="text-2xl text-violet-600 font-extrabold">
                {proj.name}
              </div>
            </div>
            <img src={proj.image} alt={proj.name} className='h-[200px] w-[200px] self-center border-2 border-pink-200 rounded-2xl' />



          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;

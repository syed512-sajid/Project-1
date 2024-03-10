import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../Constants";
import { motion } from "framer-motion";
import "./style.css";

function OverView() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3 "
        id="Overview"
      >
        <h1 className={`${Styles.sectionHeadText} text-4xl font-bold`}>Introduction</h1>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I am a skilled web developer with experience in JavaScript and
          expertise in frameworks like React and Node.js. I am a quick learner
          and collaborate to create scalable and user-friendly solutions that
          solve real-world problems. Let's work together to bring your ideas to
          life!
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <div key={service.icon}>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              gyroscope={true}
            >
              <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                <img
                  className="h-[100px] w-[100px]"
                  src={service.icon}
                  alt={service.title}
                />
                <div className="m-5 text-violet-500">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {technologies.map((technology) => (
            <div
            key = {technology.name}
            className="m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 hover:shadow-orange-300 ">

                <img className="p-2" src= {technology.icon} alt ={technology.name}/>
                <div className="text-violet-600 justify-center flex">
                    {technology.name}
                    </div>
                
                </div>
        ))}

      </div>
    </div>
  );
}

export default OverView;

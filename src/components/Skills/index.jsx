"use client";
import { skills, projects } from "@/utils/data";

import arrowImg from "../../../public/arrow2.svg";
import Image from "next/image";

import styles from "@/components/Projects/projects.module.css";
function Skills() {
  return (
    <div id="skills">
      <div className="p-6 pt-0">
        <div className="w-full h-[10vh] flex justify-center items-center">
          <h1 className="text-3xl text-center text-black font-bold py-4">
            What I Know
          </h1>
          {/* <div className="flex items-center relative z-10">
            <Image className={"arrowImage"} alt="arrowimg" src={arrowImg} />
            <h1 className={`text-lg handwritenText text-black`}>
              More Projects
            </h1>
          </div> */}
        </div>
        <div className="flex justify-center flex-wrap lg:flex-nowrap border w-full">
          {/* frontend  */}
          <div className={`m-2 text-center w-full `}>
            <h1 className="text-lg  font-bold py-4 text-blue">FrontEnd</h1>
            <div className="p-2 m-2 grid grid-cols-3 place-content-center rounded-lg">
              {skills.frontend.map((data, i) => (
                <div
                  key={i}
                  className="transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-yellow shadow-custom text-blue hover:text-white bg-white hover:bg-blue skillIcon mx-2 h-20 w-20 rounded-lg text-center flex flex-col justify-center m-2"
                >
                  <i className={`${data.icon} mx-aut text-2xl`}></i>
                  <h1 className="capitalize text-black text-md">
                    {data.SkillName}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* backend  */}
          <div className={`m-2 text-center w-full`}>
            <h1 className="text-lg  font-bold py-4 text-teal">BackEnd</h1>
            <div className="p-2 m-2  grid grid-cols-3 place-content-center rounded-lg ">
              {skills.backend.map((data, i) => (
                <div
                  key={i}
                  className="transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-yellow shadow-custom text-teal hover:text-white bg-white hover:bg-teal skillIcon mx-2 h-20 w-20 rounded-lg text-center flex flex-col justify-center m-2"
                >
                  <i className={`${data.icon} mx-aut text-2xl`}></i>
                  <h1 className="capitalize text-black text-md">
                    {data.SkillName}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          {/* Scaling Tech */}
          <div className={`m-2 text-center w-full `}>
            <h1 className="text-lg  font-bold py-4 text-purple">Scaling Up</h1>
            <div className="p-2 m-2 grid grid-cols-3 place-content-center rounded-lg">
              {skills.scalingBackend.map((data, i) => (
                <div
                  key={i}
                  className="transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-yellow shadow-custom text-purple hover:text-white bg-white hover:bg-purple skillIcon mx-2 h-20 w-20 rounded-lg text-center flex flex-col justify-center m-2"
                >
                  <i className={`${data.icon} mx-aut text-2xl`}></i>
                  <h1 className="capitalize text-black text-md">
                    {data.SkillName}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/*
          //  backend 
          <div className="m-2 text-center w-full text-teal hover:text-white bg-white hover:bg-teal rounded-lg shadow-custom transiton duration-200">
            <h1 className="text-lg  font-bold py-4 ">BackEnd</h1>
            <div className=" p-2 m-2 flex justify-evenly flex-wrap items-center rounded">
              {skills.backend.map((data, i) => (
                <div
                  key={i}
                  className="mx-auto h-20 w-20 bg-bgWhite border-b-[6px] border-[#808080] hover:border-2 hover:border-b-[8px] hover:border-yellow rounded-lg text-teal hover:text-yellow text-center flex flex-col justify-center m-2"
                >
                  <i className={`${data.icon} mx-auto text-teal text-xl`}></i>
                  <h1 className="capitalize text-black text-md">
                    {data.SkillName}
                  </h1>
                </div>
              ))}
            </div>
          </div> */}

          {/* More Projects  */}
          {/* <div className="m-2 text-center w-full bg-white rounded-lg shadow-custom">
            <div className="p-2 m-2 flex justify-evenly flex-wrap items-center rounded-lg">
              {projects.slice(4, projects.length - 1).map((data, i) => (
                <div
                  key={i}
                  className="mx-auto p-2 w-full bg-bgWhit transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-purple shadow-custom rounded-lg text-purple text-center flex flex-col justify-center m-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <i className={`${data.icon} p-2 text-xl`}></i>
                      <div>
                        <h1 className="capitalize text-black text-md text-start">
                          {data.title}
                        </h1>
                        <div className="card-actions">
                          {data.tech.map((tech, j) => (
                            <div
                              className="badge badge-outline text-xs"
                              key={j}
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${data.slug}`}
                      className="link ml-auto p-2 m-2 rounded-3xl text-blue"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex items-center relative justify-center h-[10vh] ">
        <Image
          className={`${styles.arrowImage}`}
          alt="arrowimg"
          src={arrowImg}
        />
        <h1 className={`text-md ${styles.handwritenText} text-black`}>
          Scroll Down
        </h1>
      </div>
    </div>
  );
}

export default Skills;

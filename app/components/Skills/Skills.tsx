"use client";
import { skills, projects } from "@/app/data";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { toggleCursorFunc } from "../../Redux/Features/cursorToggle";
import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import "./skills.css";
import arrowImg from "@/public/arrow2.svg";
import Image from "next/image";
import Link from "next/link";

function Skills() {
  const cursor = useSelector((state: RootState) => state.cursor.toggleCursor);
  const dispatch = useDispatch();
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const toggle = () => {
    dispatch(toggleCursorFunc());
  };
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.div id="Skills">
      <div className="p-6 pt-0">
        <div className="w-full h-[10vh] flex justify-between items-center">
          <h1 className="text-3xl text-black font-bold py-4">What I Know</h1>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(200px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center relative z-10"
          >
            <Image className={"arrowImage"} alt="arrowimg" src={arrowImg} />
            <h1 className={`text-lg handwritenText text-black`}>
              More Projects
            </h1>
          </motion.div>
        </div>
        <div className="flex justify-evenly flex-wrap lg:flex-nowrap">
          {/* frontend  */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`m-2 text-center w-full `}
          >
            <h1 className="text-lg  font-bold py-4 text-skyblue">FrontEnd</h1>
            <div className="p-2 m-2 flex justify-evenly flex-wrap items-center  rounded-lg ">
              {skills.frontend.map((data, i) => (
                <div
                  key={i}
                  className="transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-yellow shadow-custom text-skyblue hover:text-white bg-white hover:bg-skyblue skillIcon mx-2 h-20 w-20 rounded-lg text-center flex flex-col justify-center m-2"
                >
                  <i className={`${data.icon} mx-aut text-2xl`}></i>
                  <h1 className="capitalize text-black text-md">
                    {data.SkillName}
                  </h1>
                </div>
              ))}
            </div>
          </motion.div>
          {/* backend  */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`m-2 text-center w-full`}
          >
            <h1 className="text-lg  font-bold py-4 text-teal">BackEnd</h1>
            <div className="p-2 m-2 flex justify-evenly flex-wrap items-center  rounded-lg ">
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
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="m-2 text-center w-full bg-white rounded-lg shadow-custom"
          >
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
                      href={`/Projects/${data.id}`}
                      className="link ml-auto p-2 m-2 rounded-3xl text-blue"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;

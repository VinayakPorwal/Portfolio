"use client";
import { useEffect, useRef, useState } from "react";
import { projects, imageData } from "../data";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./projects.module.css";
import Image from "next/image";
import arrowImg from "@/public/arrow2.svg";
import Link from "next/link";

function Projects() {
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(container);

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  return (
    <motion.div className="p-6 py-2 pt-0" id="Projects">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1 className="text-3xl text-black font-bold py-2">Projects</h1>
        <div className="flex items-center relative">
          <Image className={styles.arrowImage} alt="arrowimg" src={arrowImg} />
          <h1 className={`text-md ${styles.handwritenText}`}>
            Tap on card to See full Details of Project
          </h1>
        </div>
      </div>

      <div
        className={`${styles.projectsContainer} shadow-custom flex-wrap lg:flex-nowrap`}
      >
        {projects.slice(0, 4).map((data, i) => (
          <motion.div
            key={i}
            className={`pt-0 card lg:w-1/4  m-[12px] transition text-black border-2 border-b-[6px] border-white border-b-darkgray hover:border-2 hover:border-b-[6px] hover:border-blue cursor-pointer shadow-custom`}
          >
            <figure className="h-32">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gKObZBIk_IhhTJNYGiqj-f5zMgQ8I0SOhoi0E68eqwhKokIsJopQDbUG16MZKXoGd9g&usqp=CAU"
                alt="Shoes"
                className="object-cover"
              />
            </figure>
            <div className="relative card-body px-6 py-4 h-auto bg-white">
              <h2 className="card-title">
                {data.title}

                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              {/* <p>{data.description}</p> */}

              <div className="card-actions">
                {data.tech.map((tech, j) => (
                  <div className="badge badge-outline" key={j}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`/Projects/${data.id}`}
              className="link ml-auto p-2 m-2 rounded-3xl text-blue"
            >
              Read more <i className="fa fa-arrow-right"></i>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center relative justify-center h-[10vh] ">
        <Image
          className={`${styles.arrowImage}`}
          alt="arrowimg"
          src={arrowImg}
        />
        <h1 className={`text-md ${styles.handwritenText} text-skyblue`}>
          Scroll Down
        </h1>
      </div>
    </motion.div>
  );
}

export default Projects;

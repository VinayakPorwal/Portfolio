"use client";
import { workExperience } from "@/utils/data";
import styles from "@/components/Projects/projects.module.css";
import Image from "next/image";
import arrowImg from "../../../public/arrow2.svg";
import Link from "next/link";
import { Briefcase, BriefcaseBusiness } from "lucide-react";

function Projects() {
  return (
    <div className="p-6 py-2 pt-0" id="work">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1 className="text-3xl text-black font-bold py-2">Work Experience</h1>
        {/* <div className="flex items-center relative">
          <Image className={styles.arrowImage} alt="arrowimg" src={arrowImg} />
          <h1 className={`text-md ${styles.handwritenText}`}>
            Tap on card to See full Details of Project
          </h1>
        </div> */}
      </div>

      <div
        className={`${styles.projectsContainer} bg-transparent   flex-wrap lg:flex-nowrap`}
      >
        {workExperience.map((data, i) => (
          <div
            key={i}
            className={`pt-0 pb-2 flex flex-col justify-between rounded-lg lg:w-1/4 m-4 transition text-black border-2 border-b-[6px] bg-white hover:border-2 hover:border-b-[6px] hover:border-blue cursor-pointer shadow-custom`}
          >
            <div>
              <figure className="h-12">
                {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gKObZBIk_IhhTJNYGiqj-f5zMgQ8I0SOhoi0E68eqwhKokIsJopQDbUG16MZKXoGd9g&usqp=CAU"
                alt="Shoes"
                className="object-cover"
              /> */}
              </figure>
              <div className="relative px-6 py-4 h-auto ">
                <h2 className="flex">
                  <BriefcaseBusiness className="mx-2" />
                  {data.name}
                </h2>
                <div className="flex justify-between items-center text-sm mx-2 my-1">
                  <h2 className="">{data.role}</h2>
                  <span className="text-xs">{data.duration}</span>
                </div>

                <div className="flex flex-wrap items-center gap-1 pt-1">
                  {data.skills.map((tech, j) => (
                    <div
                      className="border border-gray-300 px-2 py-1 rounded-lg text-blue text-xs"
                      key={j}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-l-4 border-yellow px-2 text-sm italic my-2 mx-6">
              {data.achievements[0]}
            </div>

            {/* <Link
              href={`/projects/${data.slug}`}
              className="link ml-auto p-2 m-2 rounded-3xl text-blue"
            >
              Read more <i className="fa fa-arrow-right"></i>
            </Link> */}
          </div>
        ))}
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

      {/* <div className="m-2 text-center w-full border rounded-lg shadow-custom">
        <div className="p-2 m-2 grid grid-cols-4 place-content-center gap-2 rounded-lg ">
          {projects.slice(0, projects.length - 1).map((data, i) => (
            <div
              key={i}
              className="bg-white flex justify-between items-center mx-auto p-2 w-full bg-bgWhit transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-purple shadow-custom rounded-lg text-purple text-center m-2"
            >
              <div className="flex">
                <i
                  className={`${data.icon} p-3 text-xl h-full flex flex-start`}
                ></i>
                <div>
                  <h1 className="capitalize text-black text-md text-start">
                    {data.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-1 pt-1">
                    {data.tech.map((tech, j) => (
                      <div
                        className="border border-gray-300 px-2 py-0.5 rounded-lg text-xs"
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
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Projects;

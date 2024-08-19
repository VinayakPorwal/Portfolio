import React from "react";
import arrowImg from "../../../public/arrow2.svg";
import Image from "next/image";
import { greetings } from "@/utils/data";

import styles from "@/components/Projects/projects.module.css";
function About() {
  return (
    <section id="me">
      <h1 className="text-center font-medium text-4xl border border-solid border-white py-2 px-4">
        Who I am!
      </h1>
      <div className="text-lg mx-auto p-2 w-9/12 transiton duration-200 text-center flex flex-col justify-center m-2">
        {greetings.aboutyou}
      </div>
    </section>
  );
}

export default About;

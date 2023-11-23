// "use client";
// import { useEffect, useRef, useState } from "react";
// import { projects, imageData } from "../../data";
// import { motion, useInView, Variants } from "framer-motion";
// import styles from "./projects.module.css";

// function ProjectsDummy() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const container = useRef(null);
//   const ref = useRef(null);
//   const isInView = useInView(container);
//   const handleNextSlide = () => {
//     setCurrentSlide(
//       currentSlide === projects.length - 1 ? 0 : currentSlide + 1
//     );
//   };
//   ``;
//   const handlePrevSlide = () => {
//     setCurrentSlide(
//       currentSlide === 0 ? projects.length - 1 : currentSlide - 1
//     );
//   };
//   const goToSlide = (index: any) => {
//     setCurrentSlide(index);
//   };
//   // useEffect(() => {
//   //   console.log("Element is in view: ", isInView);
//   // }, [isInView]);

//   return (
//     <motion.div className="p-6 pt-0">
//       <div className="w-full flex justify-between items-center">
//         <h1 className="text-xl text-gray-900 font-bold">Projects</h1>
//         <div className={styles.buttons}>
//           <span
//             onClick={handlePrevSlide}
//             className={`${styles.previous}  ${
//               currentSlide == 0 && styles.disable
//             }`}
//           >
//             <i className="fa fa-arrow-left"></i>
//           </span>
//           <span
//             onClick={handleNextSlide}
//             className={`${styles.next}  ${
//               currentSlide == projects.length - 1 && styles.disable
//             }`}
//           >
//             <i className="fa fa-arrow-right"></i>
//           </span>
//         </div>
//       </div>

//       <div className={styles.projectsContainer}>
//         {projects.slice(0, 4).map((data, i) => (
//           <motion.div
//             style={{
//               opacity: `${i == currentSlide ? 1 : 0.6}`,
//               transform: `translateX(-${currentSlide * 266}px) scale(${
//                 i == currentSlide ? 1.05 : 1
//               })`,
//             }}
//             key={i}
//             className={`pt-0 card min-w-[250px] bg-base-100  m-2 transition ${
//               i == currentSlide
//                 ? "border-2 border-b-[6px] border-[#4D9EFF]"
//                 : ""
//             }  cursor-pointer`}
//           >
//             <figure className="h-32">
//               <img src={imageData.img5} alt="Shoes" className="object-cover" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">
//                 {data.title}
//                 {/* <div className="badge badge-secondary">NEW</div> */}
//               </h2>
//               <p>{data.description}</p>

//               <div className="card-actions">
//                 {data.tech.map((tech, j) => (
//                   <div className="badge badge-outline" key={j}>
//                     {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       {/* <div className={styles.DotContainer}>
//           {projects.map((_, index) => (
//             <div
//               key={index}
//               className={`${styles.Dot} ${
//                 index === currentSlide ? styles.Active : ""
//               }`}
//               onClick={() => goToSlide(index * 1)}
//             ></div>
//           ))}
//         </div> */}
//     </motion.div>
//   );
// }

// export default ProjectsDummy;

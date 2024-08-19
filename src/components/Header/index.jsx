"use client";
import Image from "next/image";
import Faceimg from "../../../public/newProfile.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// function Header() {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const header = headerRef.current;

//     const image = header.querySelector("#pfp-image");
//     const text = header.querySelector("#header-text");
//     const stats = header.querySelector("#stats-div");
//     const background = header.querySelector("#header-back");

//     const tl = gsap.timeline({ paused: true });

//     tl.to(image, { duration: 0.3, width: 50, height: 50 })
//       .to(text, { duration: 0.3, opacity: 0 }, "<")
//       .to(stats, { duration: 0.3, opacity: 0 }, "<")
//       .to(background, { duration: 0.3, width: 0, height: 0 }, "<");

//     window.addEventListener("scroll", () => {
//       const scrollY = window.scrollY;
//       const headerHeight = header.offsetHeight;

//       if (scrollY > headerHeight) {
//         tl.play();
//       } else {
//         tl.reverse();
//       }
//     });

//     return () => window.removeEventListener("scroll", () => {});
//   }, []);

//   return (
//     <div
//       ref={headerRef}
//       className={`relative my-4 w-full flex justify-end items-center rounded-lg h-[20vh] bg-no-repeat bg-cover transition-all duration-300`}
//     >
//       <div className="w-full">
//         <div className="rounded-lg absolute h-full w-full" id="header-back">

//         </div>
//         <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 backdrop-opacity-50 w-full gap-2 md:gap-10">
//           <div className="">
//             <Image
//               alt="Vinayak porwal"
//               id="pfp-image"
//               className="object-cover border-4 border-yellow rounded-full shadow-md h-28 w-28"
//               src={Faceimg}
//             />
//           </div>
//           <div
//             className="flex md:flex-1 flex-col justify-center gap-4"
//             id="header-text"
//           >

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    const image = header.querySelector("#pfp-image");
    const text = header.querySelector("#header-text");
    const stats = header.querySelector("#stats-div");
    const background = header.querySelector("#header-back");
    // Get the image's center position relative to the header
    const imageRect = image.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();

    const centerX = imageRect.left - headerRect.left + imageRect.width / 2;
    const centerY = imageRect.top - headerRect.top + imageRect.height / 2;
    const tl = gsap.timeline({ paused: true });

    tl.to(text, { duration: 0.3, opacity: 0, ease: "power2.out" }, "<")
      .to(stats, { duration: 0.3, opacity: 0, ease: "power2.out" }, "<")
      .to(
        background,
        {
          duration: 0.3,
          width: 20, // Shrink to a circle size
          height: 20, // Shrink to a circle size
          borderRadius: "100px", // Make it circular
          ease: "power2.out",
          left: centerX - 35 + "px", // Center background on the image
          top: centerY - 30 + "px", // Center background on the image
        },
        "<"
      );

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = header.offsetHeight;

      if (scrollY > headerHeight) {
        tl.play();
      } else {
        tl.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className={`relative w-full flex justify-end items-center rounded-lg h-max bg-no-repeat bg-cover transition-all duration-300 border`}
    >
      <div className="w-full">
        <div
          className="rounded-lg absolute h-full w-full bg-center"
          id="header-back"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <ul className="circles rounded-lg px-2">
            <li>
              <i className="fab fa-github full"></i>
            </li>
            <li>
              <i className="fas fa-database full"></i>
            </li>
            <li>
              <i className="fab fa-css3-alt full"></i>
            </li>
            <li>
              <i className="fab fa-npm full"></i>
            </li>
            <li>
              <i className="fab fa-php full"></i>
            </li>

            <li>
              <i className="fab fa-js full"></i>
            </li>
            <li>
              <i className="fab fa-react full"></i>
            </li>
            <li>
              <i className="fab fa-html5 full"></i>
            </li>
            <li>
              <i className="fas fa-fire full"></i>
            </li>
            <li>
              <i className="fab fa-python full"></i>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:rounded-ld overflow-hidden md:px-5 py-5 backdrop-opacity-50 w-full gap-2 md:gap-10">
          <div>
            <Image
              alt="Vinayak porwal"
              id="pfp-image"
              className="object-cover border-4 border-yellow rounded-full shadow-md h-14 w-14"
              src={Faceimg}
            />
          </div>
          <div
            className="flex md:flex-1 flex-col justify-center gap-4"
            id="header-text"
          >
            <div className="flex justify-between items-center gap-5 ">
              <div className="text-3xl flex flex-col font-bold text-[#fffdfd]">
                Vinayak Porwal
                <div className="text-sm font-thin flex justify-between items-center">
                  @vinayakporwal
                  <a className="block md:hidden" target="_blank" href="#">
                    <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2"></button>
                  </a>
                </div>
              </div>
              {/* <a
              className="hidden md:block"
              target="_blank"
              href="#"
            >
              <div id="stats-div" className="stats shadow bg-transparent text-white ">
                <div className="stat place-items-center text-white">
                  <div className="stat-title text-white">Projects</div>
                  <div className="stat-value">25+</div>
                </div>

                <div className="stat place-items-center text-white">
                  <div className="stat-title text-white">Technologies</div>
                  <div className="stat-value">20</div>
                </div>
              </div>
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

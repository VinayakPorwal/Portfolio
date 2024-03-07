"use client";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { toggleTheme } from "../../Redux/Features/themeSlice";
import Link from "next/link";

function Sidebar() {
  const darkmode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();
  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="w-full h-full p-4">
      <div className="h-[-webkit-fill-available] bg-bgWhite rounded-lg p-4 shadow-custom">
        <div className="tabs flex flex-col justify-center items-center">
          <div className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
            <i className="fa fa-house text-2xl px-2"></i>
            <Link href="/">
              <span className="p-2">Home</span>
            </Link>
          </div>
          <div className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
            <i className="fa fa-list-check text-2xl px-2"></i>
            <Link href="/#Projects">
              <span className="p-2 ">Projects</span>
            </Link>
          </div>
          <div className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
            <i className="fa fa-gears text-2xl px-2"></i>
            <Link href="/#Skills">
              <span className="p-2 ">Skills</span>
            </Link>
          </div>
          <div className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
            <i className="fa fa-briefcase text-2xl px-2"></i>
            <span className="p-2 ">Work-Experience</span>
          </div>
          <div className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
            <i className="fa fa-address-card text-2xl px-2"></i>
            <span className="p-2 ">About me</span>
          </div>
        </div>
        <h1 className="mt-4 text-xl font-semibold p-0 ml-4 text-lightpink">
          Social
        </h1>
        <div className="mt-2 tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
          <i className="fa fa-at text-xl px-2"></i>
          <span className="p-2 underline">E-Mail</span>
        </div>
        <div className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue">
          <i className="fa-brands fa-linkedin-in text-xl px-2"></i>
          <span className="p-2 underline">Linkedin</span>
        </div>
        <a
          href="https://github.com/vinayakporwal"
          className="tab flex items-center justify-start my-4 text-lg w-full m-auto text-darkgray hover:text-blue"
        >
          <i className="fab fa-github text-xl px-2"></i>
          <span className="p-2 underline">Github</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import {
  BriefcaseBusinessIcon,
  Check,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  Newspaper,
  Sparkles,
  SquareChevronLeftIcon,
  SquareChevronRightIcon,
  User,
  X,
} from "lucide-react";

// interface SidebarProps {
//   sidebarOpen: boolean;
//   setSidebarOpen: (arg: boolean) => void;
// }

const Sidebar = ({ isChecked, handleCheckboxChange }) => {
  const pathname = usePathname();

  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <aside
      // ref={sidebar}
      className={`z-9999 h-full rounded-lg pt-2 ${
        isCollapsed ? "w-72" : "w-20"
      } bg-black duration-[50]`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 ">
        <div
          className={`rounded-md p-2 w-full text-gray-2 cursor-pointer flex ${
            !isCollapsed && "justify-center"
          }`}
        >
          {!isCollapsed ? (
            <SquareChevronRightIcon
              className="text-yellow"
              onClick={() => setCollapsed(!isCollapsed)}
            />
          ) : (
            /* From Uiverse.io by Galahhad */
            <div className="flex justify-end w-full">
              {/* <div class="flex items-center mb-4">
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Overlapping Sidebar
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div> */}
              <SquareChevronLeftIcon
                className="text-yellow"
                onClick={() => setCollapsed(!isCollapsed)}
              />
            </div>
          )}
        </div>

        <button
          // ref={trigger}
          onClick={() => setCollapsed(!isCollapsed)}
          aria-controls="sidebar"
          aria-expanded={isCollapsed}
          className="block lg:hidden"
        >
          <X strokeWidth={1} />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="text-white no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}

        {/* <!-- Menu Group --> */}
        <div>
          <h3
            className={`my-2 text-sm font-semibold text-bodydark2 ${
              !isCollapsed ? "flex justify-center" : "ml-4"
            }`}
          >
            MENU
          </h3>

          <ul className="mb-6 flex flex-col gap-1.5">
            {/* <!-- Menu Item Dashboard --> */}
            <MenuItem
              href="/#me"
              pathname={pathname}
              Icon={User}
              label="Me"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              href="/#skills"
              pathname={pathname}
              Icon={Sparkles}
              label="Skills"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              href="/#work"
              pathname={pathname}
              Icon={BriefcaseBusinessIcon}
              label="Work Experience"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              href="/#projects"
              pathname={pathname}
              Icon={FolderGit2}
              label="Projects"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              href="/blogs"
              pathname={pathname}
              Icon={Newspaper}
              label="Blogs"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              href="/sendmail"
              pathname={pathname}
              Icon={Mail}
              label="Send Mail"
              isCollapsed={isCollapsed}
            />
            <h3
              className={`mt-6 mb-2 text-sm font-semibold text-bodydark2 ${
                !isCollapsed ? "flex justify-center" : "ml-4"
              }`}
            >
              GET ME
            </h3>
            <MenuItem
              Icon={Mail}
              pathname={pathname}
              href="mailto:@vinayakporwal5522@gmail.com"
              label="Email"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              Icon={Linkedin}
              pathname={pathname}
              href="https://linkedin.com/in/vinayakporwal"
              label="Linkedin"
              isCollapsed={isCollapsed}
            />
            <MenuItem
              Icon={Github}
              pathname={pathname}
              href="https://github.com/vinayakporwal"
              label="Github"
              isCollapsed={isCollapsed}
            />
          </ul>
        </div>

        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};
const MenuItem = ({ href, pathname, Icon, label, isCollapsed }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });
  function extractIdFromPathname() {
    // Split the pathname by '/' to get all segments
    const segments = href.split("/");
    console.log(segments);
    // Return the last segment, which is assumed to be the ID
    if (segments.length === 0 || segments.at(-1)[0] !== "#") return "#";
    return segments.pop(); // If there's no last segment, return null
  }

  const id = extractIdFromPathname();

  return (
    <li>
      <Link
        href={`${href}`}
        onClick={() => lenis.scrollTo(id, { lerp: 0.03 })}
        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-blue ${
          pathname === href && "text-blue dark:bg-meta-4"
        } ${!isCollapsed && "justify-center"} `}
      >
        <Icon strokeWidth={1} size={25} />
        {isCollapsed && label}
      </Link>
    </li>
  );
};
export default Sidebar;

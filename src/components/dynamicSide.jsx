"use client";

import React, { useState } from "react";
import SmoothScrolling from "@/components/SmoothScrolling";
import Sidebar from "@/components/Sidebar/index";
function DynamicSide({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className={`${!isChecked && "flex"} transition-all duration-300`}>
      <div
        className={`${
          isChecked ? "fixed" : "h-max w-max sticky"
        } top-[calc(110px)] left-2 px-2 z-40 transition-all duration-300`}
      >
        <Sidebar
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>

      {/* Adjust padding to match sidebar width */}
      <div className="overflow-y-scroll">
        <SmoothScrolling>{children}</SmoothScrolling>
      </div>
    </div>
  );
}

export default DynamicSide;

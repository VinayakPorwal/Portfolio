import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor/index";
import Header from "@/components/Header/index";
import DynamicSide from "@/components/dynamicSide";
import SmoothScrolling from "@/components/SmoothScrolling";
import Sidebar from "@/components/Sidebar/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinayak Porwal Portfolio",
  description:
    "Vinayak porwal is a software developer specializing in full stack web app development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="relative bg-whiteblue px-2 pb-0 gap-2">
          {/* Sticky Header */}
          <div className="sticky px-2 z-50 top-2 w-full flex flex-col gap-2 transiton-all duration-300">
            <Header />
          </div>

          {/* All child prone to client side render */}
          {/* <DynamicSide> {children}</DynamicSide> */}

          {/* no overlap solution */}
          <div className={`flex`}>
            <div
              className={`h-max w-max sticky top-[calc(110px)] left-2 px-2 z-40`}
            >
              <Sidebar />
            </div>

            {/* Adjust padding to match sidebar width */}
            <div className="overflow-y-scroll">
              <SmoothScrolling>{children}</SmoothScrolling>
            </div>
          </div>
        </div>
        <CustomCursor />
      </body>
    </html>
  );
}

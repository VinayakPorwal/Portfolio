import Image from "next/image";
import Faceimg from "../../../public/profile-pic.png";
function Header() {
  return (
    <div
      className={`relative flex items-center rounded-lg w-full h-[20vh] bg-no-repeat bg-cover`}
    >
      <div className="area">
        <ul className="circles">
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
      <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 backdrop-opacity-50 w-full gap-2 md:gap-10">
        <div className="">
          <Image
            alt="Vinayak porwal"
            className="object-cover border-4 border-white rounded-full shadow-md h-28 w-28"
            src={Faceimg}
          />
        </div>
        <div className="flex md:flex-1 flex-col justify-center gap-4">
          <div className="flex justify-between items-center gap-5 ">
            <div className="text-3xl flex flex-col font-bold text-[#fffdfd]">
              Vinayak Porwal
              <div className="text-sm font-thin flex justify-between items-center">
                @vinayakporwal
                <a
                  className="block md:hidden"
                  target="_blank"
                  href="https://instagram.com/ezSnippet"
                >
                  <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2"></button>
                </a>
              </div>
            </div>
            {/* <a
              className="hidden md:block"
              target="_blank"
              href="https://instagram.com/ezSnippet"
            >
              <div className="stats shadow bg-transparent text-white ">
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
  );
}

export default Header;

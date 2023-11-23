import { projects } from "@/app/data";
import Link from "next/link";
export default function Page({ params }: { params: { slug: number } }) {
  const data = projects[params.slug - 1];
  return (
    <>
      <Link href="/" className="p-2 m-2 text-black text-lg">
        <i className="fa fa-chevron-left p-2 text-md"></i>Back
      </Link>
      <div className="lg:h-[70vh] lg:flex items-center justify-center">
        <div className="mx-auto w-[50%]">
          <div className="relative mx-auto border-darkgray bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="overflow-hidden h-[140px] md:h-[262px]">
              <img
                src={data.image}
                className="h-[140px] md:h-[262px] w-full object-fit"
                alt=""
              />
            </div>
          </div>
          <div className="relative mx-auto bg-black rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
          <div className="relative mx-auto bg-darkgray rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </div>

        {/* Details  */}
        <div className="mx-auto text-center w-[50%]">
          <div
            className={`pt-0 card m-[12px] transition text-black border-2 border-b-[6px] border-white border-b-darkgray hover:border-b-blue cursor-pointer shadow-custom`}
          >
            <div className="card-body px-6 py-4 h-auto bg-white">
              <h2 className="card-title">
                {data.title}

                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>{data.description}</p>
              {data.points.map((point, i) => (
                <li className="text-start" key={i}>
                  {point}
                </li>
              ))}
              <div className="card-actions">
                {data.tech.map((tech, i) => (
                  <div className="badge badge-outline" key={i}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-end">
              <a
                href={data.link}
                className="inline-block link ml-auto p-2 m-2 rounded-3xl text-blue"
              >
                <i className="fa fa-up-right-from-square p-2"></i>
                Live
              </a>
              <a
                href={data.code}
                className="inline-block link ml-auto p-2 m-2 rounded-3xl text-blue"
              >
                <i className="fa fa-link p-2"></i>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

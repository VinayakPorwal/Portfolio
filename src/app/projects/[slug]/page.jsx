import { projects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
export default function Page({ params }) {
  const slugMatch = projects.filter((project) => params.slug == project.slug);
  const data = slugMatch[0];
  if (!data) return <>No projects</>;

  return (
    <>
      <Link href="/" className="p-2 m-2 text-black text-lg">
        <i className="fa fa-chevron-left p-2 text-md"></i>Back
      </Link>
      <div className="lg:h-[70vh] lg:flex justify-evenly gap-2 mt-4">
        <div className="mx-auto w-[50%] px-4">
          <Image
            width={500}
            height={400}
            src={data.image}
            className="h-[70%] w-full object-fit mx-auto bg-white transiton duration-200 border-2 border-b-[6px] border-darkgray hover:border-yellow shadow-custom rounded-lg text-yellow text-center flex flex-col justify-center m-2"
            alt=""
          />
        </div>

        {/* Details  */}
        <div className="mx-auto text-center w-[50%]">
          <div
            className={`pt-0 m-[12px] transition text-black border-2 border-b-[6px] border-white border-b-darkgray hover:border-b-blue cursor-pointer shadow-custom`}
          >
            <div className="card-body px-6 py-4 h-auto bg-white">
              <h2 className="font-semibold text-3xl">
                {data.title}

                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>{data.description}</p>
              {data.points?.map((point, i) => (
                <li className="text-start" key={i}>
                  {point}
                </li>
              ))}
              <div className="flex flex-wrap items-center gap-1 mt-1">
                {data.tech.map((tech, j) => (
                  <div
                    className="border border-purple text-purple px-2 py-1 rounded-lg text-xs"
                    key={j}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-end bg-black">
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

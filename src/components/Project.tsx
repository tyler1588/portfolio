import Image from "next/image";
import Link from "next/link";

type projectType = {
  img: string;
  alt: string;
  title: string;
  description: string;
  preview: string;
  github: string;
};

const Project = (props: projectType) => {
  return (
    <div className="w-96 rounded-xl flex flex-col justify-between shadow-xl overflow-hidden">
      <div>
        <Image
          src={props.img}
          alt={props.alt}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <h2 className="text-2xl p-3">{props.title}</h2>
        <p className="px-3">{props.description}</p>
      </div>

      <div className="bg-white p-3">
        <div className="flex justify-between mt-5">
          <Link
            className="bg-black rounded text-white p-2 hover:bg-slate-700 transition-all"
            href={props.preview}
          >
            Live Preview
          </Link>
          <Link
            className="border-2 border-black rounded p-2 hover:bg-slate-200 transition-all"
            href={props.github}
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;

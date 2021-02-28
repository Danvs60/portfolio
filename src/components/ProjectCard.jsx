import React from "react";

export default function ProjectCard({ title, descr, img, className, url }) {
  return (
    <div
      className={`h-72 px-8 py-8 card ${className} overflow-hidden rounded-2xl shadow-lg bg-mintCream`}
    >
      <a href={url}>
        <div className=" cursor-pointer scale-95 transition duration-200 ease-in-out transform hover:scale-100 relative flex flex-col gap-y-4 text-lg text-gray-800">
          <h2 className="text-2xl font-bold z-10">{title}</h2>
          <p className="z-10 font-medium">{descr}</p>
          <img className="absolute opacity-25" src={img} alt="thumbnail" />
        </div>
      </a>
    </div>
  );
}

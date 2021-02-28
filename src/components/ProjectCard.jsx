import React from "react";

export default function ProjectCard({ title, descr, img, className }) {
  const bgImg = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div
      style={bgImg}
      className={`bg-no-repeat bg-contain card h-72 px-8 py-8 flex flex-col gap-y-8 rounded-2xl shadow-lg bg-mintCream text-lg text-gray-800 ${className} `}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{descr}</p>
    </div>
  );
}

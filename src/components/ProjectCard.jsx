import React from "react";

export default function ProjectCard({ className }) {
  return (
    <div
      className={`transition duration-700 ease-in-out transform hover:scale-125 card h-52 px-8 py-8 flex flex-col gap-y-8 rounded-2xl shadow-lg bg-mintCream text-lg text-gray-800 ${className} `}
    >
      <h2 className="text-2xl font-bold">Project Name</h2>
      <p>Description</p>
    </div>
  );
}

import React from "react";

export default function ProjectCard({ delay = "0.5" }) {
  const anDelay = {
    animationDelay: `${delay} + s`,
  };

  return (
    <div
      style={anDelay}
      className="card px-8 py-4 flex flex-col gap-y-4 justify-center rounded-2xl shadow-lg bg-mintCream text-lg text-gray-800"
    >
      <h2 className="text-2xl font-bold">Project Name</h2>
      <p>Description</p>
      <span className=" w-16 h-16 bg-skobeloff text-mintCream rounded-full self-end flex justify-center items-center">
        Link
      </span>
    </div>
  );
}

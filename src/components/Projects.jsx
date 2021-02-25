import React from "react";
import ProjectCard from "./ProjectCard";
import waves from "../images/waves.svg";
import shooting from "../images/shooting.svg";

export default function Projects() {
  return (
    <>
      <img
        className="absolute right-36 top-28 stars"
        src={shooting}
        alt="shootingStars"
      />
      <img className="absolute bottom-0" src={waves} alt="waves" />
      <div className="flex flex-col justify-between flex-grow px-32 pb-12">
        <section className="flex flex-col gap-24 z-10">
          <h1 className="font-bold text-8xl z-10">Some of my work</h1>
          <div className="flex gap-x-16 cards">
            <ProjectCard
              title="Genetic Algorithms"
              desc="2 algorithms that will pick the solution with the best fitness."
            />
            <ProjectCard className=" mt-32" />
            <ProjectCard className=" mt-64" />
          </div>
        </section>
        <p className="text-5xl z-10 projects">
          Find more on my <span className="underline">GitHub</span>
        </p>
      </div>
    </>
  );
}

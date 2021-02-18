import React from "react";
import ProjectCard from "./ProjectCard";
import { BottomMountains, ShootingStars } from "./vectors";

export default function Projects() {
  return (
    <>
      <div className="absolute top-6 right-20 stars">
        <ShootingStars />
      </div>
      <div className="absolute bottom-0 w-full">
        <BottomMountains />
      </div>
      <div className="flex flex-col justify-between flex-grow px-32 py-16">
        <section className="flex flex-col gap-16 z-10">
          <h1 className="font-bold text-8xl z-10 projects">Projects</h1>
          <div className="flex gap-x-16 cards">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <p className="text-5xl z-10 projects">
          Find more on my <span className="underline">GitHub</span>
        </p>
      </div>
    </>
  );
}

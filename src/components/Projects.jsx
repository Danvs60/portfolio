import React from "react";
import ProjectCard from "./ProjectCard";
import { BottomMountains, ShootingStars } from "./vectors";

export default function Projects() {
  return (
    <>
      <div className="absolute top-6 right-20">
        <ShootingStars />
      </div>
      <div className="absolute bottom-0 w-full">
        <BottomMountains />
      </div>
      <div className="flex flex-col px-32">
        <section className="flex flex-col gap-16 z-10">
          <h1 className="font-bold text-8xl z-10">Projects</h1>
          <div className="flex gap-x-12 cards">
            <ProjectCard />
            <ProjectCard delay="1" />
            <ProjectCard delay="1.5" />
          </div>
        </section>
        <p className="text-5xl">
          Find more on my <span className="underline">GitHub</span>
        </p>
      </div>
    </>
  );
}

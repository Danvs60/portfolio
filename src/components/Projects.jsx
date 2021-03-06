import React from "react";
import ProjectCard from "./ProjectCard";
import waves from "../images/waves.svg";
import tablet_waves from "../images/tablet_waves.svg";
import shooting from "../images/shooting.svg";
import ga from "../images/undraw_problem_solving.svg";
import lofi from "../images/undraw_experience_design.svg";
import ttt from "../images/undraw_gaming.svg";

export default function Projects() {
  return (
    <>
      <img
        className="fixed right-36 top-28 stars"
        src={shooting}
        alt="shootingStars"
      />
      <img
        className="fixed bottom-0 w-full md:hidden"
        src={tablet_waves}
        alt="tablet"
      />
      <img
        className="fixed bottom-0 w-full hidden md:block"
        src={waves}
        alt="waves"
      />
      <div className="flex flex-col justify-between flex-grow px-8 md:px-32 pb-12">
        <section className="flex flex-col gap-y-12 lg:gap-y-24 z-10">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl z-10">
            Some of my work
          </h1>
          <div className="w-full pb-12 flex flex-col lg:justify-start lg:flex-row flex-wrap gap-16 cards">
            <ProjectCard
              title="Genetic Algorithms"
              descr="2 algorithms that will pick the solution with the best fitness."
              img={ga}
              url="https://github.com/Danvs60/genetic-algorithms"
            />
            <ProjectCard
              title="Lo-Fi Prototype"
              descr="Lo-Fi prototype of a touchscreen app that lets users order their coffee at the cafe."
              img={lofi}
              className="xl:mt-32"
              url="https://github.com/Danvs60/lofi-prototyping"
            />
            <ProjectCard
              title="Tic Tac Toe"
              descr="The good old tic tac toe game, built in html and javascript."
              img={ttt}
              className="xl:mt-64"
              url="https://github.com/Danvs60/tictactoe"
            />
          </div>
        </section>
        <p className=" text-3xl md:text-4xl lg:text-5xl z-10 projects">
          Find more on my{" "}
          <a
            href="https://github.com/Danvs60"
            className="underline duration-200 hover:text-darkOrange"
          >
            GitHub
          </a>
        </p>
      </div>
    </>
  );
}

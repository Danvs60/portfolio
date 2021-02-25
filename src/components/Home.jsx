import React from "react";
import me from "../images/me.jpg";
import left from "../images/left.svg";
import right from "../images/right.svg";

export default function Home() {
  const mePic = {
    backgroundImage: `url(${me})`,
  };

  const headerFont = {
    fontFamily: "Sora",
  };
  return (
    <>
      <img className="absolute" src={left} alt="left" />
      <img className="absolute right-0" src={right} alt="right" />
      <section className="flex flex-col gap-y-32 px-32 z-10">
        <div className="flex justify-between items-center">
          <h1 style={headerFont} className="font-semibold text-8xl z-10 home">
            Hello, <br /> I am Daniel Bartolini
          </h1>
          <div
            style={mePic}
            className="rounded-full w-88 h-88 bg-mintCream box-border border-2 border-mintCream bg-no-repeat bg-cover"
          ></div>
        </div>
        <h3 className="w-2/3 px-4 py-4 text-4xl font-light italic border-l border-darkOrange place-self-center">
          University of Kent <br /> BSc Computer Science (Networks) <br /> 2nd
          year
        </h3>
        <h3 className="w-2/3 px-4 py-4 text-4xl font-light italic border-l border-darkOrange place-self-end">
          Native Italian <br /> Business Level English
        </h3>
      </section>
    </>
  );
}

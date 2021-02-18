import React from "react";
import { RightAbstract, LeftAbstract } from "./vectors";
import me from "../images/me.jpg";

export default function Home() {
  const mePic = {
    backgroundImage: `url(${me})`,
  };
  return (
    <>
      <div className="fixed right-0 bottom-0 right">
        <RightAbstract />
      </div>
      <div className="fixed bottom-0 left">
        <LeftAbstract />
      </div>
      <section className="flex flex-col gap-16 px-32 z-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-8xl z-10 home">
            Hello, <br /> I am Daniel Bartolini
          </h1>
          <div
            style={mePic}
            className="rounded-full w-80 h-80 bg-mintCream box-border border-2 border-mintCream bg-no-repeat bg-cover home"
          ></div>
        </div>
        <h3 className="text-5xl w-2/3 home">
          I am a 2nd year Computer Science undergraduate at the University of
          Kent.
        </h3>
        <h3 className="text-5xl w-2/3 home">
          I come from Italy and I have also been a high school Exchange Student
          in US.
        </h3>
      </section>
    </>
  );
}

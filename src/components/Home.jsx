import React from "react";
import me from "../images/me.jpg";
import left from "../images/left.svg";
import right from "../images/right.svg";
import tablet_bg from "../images/tablet_home.svg";

export default function Home() {
  const headerFont = {
    fontFamily: "Sora",
  };
  return (
    <>
      <img className="hidden sm:block fixed h-full" src={left} alt="left" />
      <img
        className="hidden sm:block fixed h-full right-0"
        src={right}
        alt="right"
      />
      <img
        className="fixed h-full w-full sm:hidden right-0"
        src={tablet_bg}
        alt="tablet"
      />
      <section className="flex flex-col flex-grow gap-y-16 px-8 md:px-32 pb-16 z-10">
        <div className="flex items-center flex-row justify-between md:h-72 xl:h-96">
          <h1
            style={headerFont}
            className="mr-4 font-semibold leading-relaxed tracking-wide lg:leading-loose 
            lg:tracking-widest text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl z-10 home"
          >
            Hello, <br /> I am Daniel Bartolini
          </h1>
          <img className="rounded-full h-44 md:h-full " src={me} alt="me" />
        </div>
        <section className="self-center flex flex-col w-3/4 lg:w-1/2 gap-y-20 home">
          <h3
            className="self-center px-4 py-4 text-lg sm:text-xl md:text-2xl xl:text-4xl 
        font-light italic border-l border-darkOrange home"
          >
            University of Kent <br /> BSc Computer Science (Networks) <br /> 2nd
            year
          </h3>

          <h3
            className="px-4 py-4 text-right sm:text-left text-lg sm:text-xl 
        md:text-2xl xl:text-4xl font-light italic border-r border-l-0 sm:border-l 
        sm:border-r-0 border-darkOrange self-center lg:self-end home"
          >
            Native Italian <br /> Native/Bilingual English
          </h3>
        </section>
      </section>
    </>
  );
}

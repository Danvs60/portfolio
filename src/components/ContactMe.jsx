import React from "react";
import lastwave from "../images/lastwave.svg";

export default function ContactMe() {
  return (
    <>
      <img className="absolute left-0" src={lastwave} alt="wave" />
      <div className="z-10 px-32 py-16 text-3xl flex flex-col gap-y-20 text-gray-200 ">
        <h1 className="font-bold text-8xl z-20 text-mintCream home">
          Get in touch
        </h1>
        <p className="home font-medium">Email: db666@kent.ac.uk</p>
        <p className="home font-medium">Mobile: +44 7747463567</p>
        <p className="home font-medium">
          LinkedIn:{" "}
          <a
            className="underline duration-200 hover:text-darkOrange"
            href="https://www.linkedin.com/in/db666/"
          >
            linkedin.com/in/db666
          </a>
        </p>
      </div>
    </>
  );
}

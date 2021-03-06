import React from "react";
import lastwave from "../images/lastwave.svg";
import tablet_lastwave from "../images/tablet_lastwave.svg";
import { FaUniversity, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function ContactMe() {
  return (
    <>
      <img
        className="fixed h-full left-0 hidden md:block"
        src={lastwave}
        alt="wave"
      />
      <img
        className="fixed h-full left-0 md:hidden"
        src={tablet_lastwave}
        alt="tablet"
      />
      <div className="z-10 px-8 sm:px-16 md:px-24 lg:px-32 pb-8 text-xl sm:text-2xl md:text-3xl flex flex-col gap-y-20 text-gray-200 ">
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl z-20 text-mintCream home">
          Get in touch
        </h1>
        <p className="home flex flex-wrap gap-x-3 items-center md:font-medium">
          <FaUniversity /> Email: db666@kent.ac.uk
        </p>
        <p className="home flex flex-wrap gap-x-3 items-center md:font-medium">
          <FaPhoneAlt /> Mobile: +44 7747463567
        </p>
        <p className="home flex flex-wrap gap-x-3 items-center md:font-medium">
          <FaLinkedin /> LinkedIn:
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

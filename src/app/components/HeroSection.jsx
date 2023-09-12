"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#700cfc] to-blue-600">
              Hello, I&apos;m{""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sumit Jagtap",
                1500,
                "Web Developer",
                1500,
                "Team Leader",
                1500,
                "UI/UX Designer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ex
            quos voluptas. Magni, cupiditate natus. Perferendis incidunt enim
            officiis! Animi!
          </p>
          <div className="">
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-[#700cfc] via-[#5067da] to-blue-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button
              className="rounded-full bg-gradient-to-br from-[#700cfc] via-[#5067da] to-blue-500 bg-transprent hover:bg-slate-800 w-full sm:w-fit px-1 py-1 text-white border mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Cv
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] lg- relative">
            <Image
              src="/images/he.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

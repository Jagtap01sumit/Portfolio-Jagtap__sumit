"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1
            className="text-left text-white mb-4 text-4xl sm:text-5xl lg:text-8xl
          lg:leading-normal font-extrabold"
          >
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
                "Learner.",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-left text-base sm:text-lg lg:text-xl mb-6">
            I am enthusiastically seeking a stimulating job opportunity in the
            technology sector that not only fosters continuous learning and
            problem-solving but also provides a dynamic environment where I can
            apply my skills, innovate, and thrive.
          </p>
          <div className="">
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-[#700cfc] via-[#5067da] to-blue-500 hover:bg-slate-200 text-white">
              <a href="#contactSection">Hire Me</a>
            </button>
            <button className="rounded-full bg-gradient-to-br from-[#700cfc] via-[#5067da] to-blue-500 bg-transprent hover:bg-slate-800 w-full sm:w-fit px-1 py-1 text-white border mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="/resume/Sumit_Jagtap_CV.pdf">Download Cv</a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] lg- relative">
            <Image
              src="/images/he.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            ></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

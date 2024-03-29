"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
export default function ProjectSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const projectData = [
    {
      id: 1,
      title: "SnapKart",
      description: "E-Commerce Website with Admin Pannel",
      image: "/images/E-Commerce-Site.jpg",
      tag: ["All", "Web"],
      gitUrl:
        "https://github.com/Jagtap01sumit/E-Commerce-Website-with-admin-panel",
      preViewUrl: "/",
    },
    {
      id: 2,
      title: "Project Management System",
      description:
        "Tracking the process of Preject with timeline. having 2 sides admin & employee",
      image: "/images/project-4.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Jagtap01sumit/",
      preViewUrl: "/",
    },
    {
      id: 3,
      title: "Admin Dashboard UI",
      description: "UI for the admin dashboards ( Amazing Animations) ",
      image: "/images/project-5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Jagtap01sumit/MYKNOT-INTERN",
      preViewUrl: "https://admin-dashboard-ui-nu.vercel.app/",
    },
    {
      id: 4,
      title: "NextJs Portfolio Website",
      description: "Project 1 description",
      image: "/images/project-1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Jagtap01sumit/Portfolio-Jagtap__sumit",
      preViewUrl: "https://jagtap-sumit-jagtap01sumit.vercel.app/",
    },
    {
      id: 5,
      title: "ProfileSphere(Using NEXTJS)",
      description: "Project 4 description",
      image: "/images/project-2.png",
      tag: ["Web"],
      gitUrl: "https://github.com/Jagtap01sumit/ProfileSphere",
      preViewUrl: "/",
    },
    {
      id: 6,
      title: "MedTech",
      description: "Project 3 description",
      image: "/images/project-2.png",
      tag: ["Web"],
      gitUrl: "https://github.com/Jagtap01sumit/MedTech-Website",
      preViewUrl: "/",
    },
    {
      id: 7,
      title: "WhatsApp Chat Analyzer",
      description: "Project 6 description",
      image: "/images/project-2.png",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/Jagtap01sumit/WhatsApp-Chat-Analyzer",
      preViewUrl: "/",
    },
    {
      id: 8,
      title: "CinemaHub",
      description: "Movie Ticket Booking Mobile Application (React-Native)",
      image: "/images/project-2.png",
      tag: ["All", "Mob. App"],
      gitUrl: "https://github.com/Jagtap01sumit/CinemaHub",
      preViewUrl: "/",
    },
    {
      id: 9,
      title: "BrewHub",
      description: "Cafee App -> you can book your coffee or pre order",
      image: "/images/project-2.png",
      tag: ["Mob. App"],
      gitUrl: "https://github.com/Jagtap01sumit/Coffee_Shop_App",
      preViewUrl: "/",
    },
  ];
  const filterProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="projectSection">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mob. App"
          isSelected={tag === "Mob. App"}
        />
      </div>
      <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              preViewUrl={project.preViewUrl}
            />
          </motion.li>
        ))}
      </div>
    </div>
  );
}

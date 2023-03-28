import React, { useEffect } from "react";
import { projects } from "../../data.js";

// import { projects } from "../card/ProjectCard";
import ProjectCard from "../card/ProjectCard.jsx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProjectSlider = () => {
  let box;
  let scroll;
  useEffect(() => {
    box = document.querySelector(".project-slider");
    console.log(box);
    scroll = box.clientWidth;
  }, []);

  function onLeft() {
    box.scrollLeft += scroll;
  }

  function onRight() {
    box.scrollLeft = box.scrollLeft - scroll;
  }
  return (
    <div className="p-12">
      <h1 className="text-4xl font-semibold mb-4">
        Get inspired with projects made by our freelancers
      </h1>
      <div className="relative">
        <div className="absolute top-0 flex h-full items-center">
          <button
            onClick={onLeft}
            className="bg-white p-4 rounded-full shadow-md "
          >
            <AiOutlineLeft />
          </button>
        </div>

        <div className="absolute right-0 flex h-full items-center">
          <button
            onClick={onRight}
            className="bg-white p-4 rounded-full shadow-md "
          >
            <AiOutlineRight />
          </button>
        </div>

        <div className="project-slider scroll-smooth flex gap-4 overflow-x-hidden">
          {projects.map((project) => {
            const { id: key, ...rest } = project;
            return <ProjectCard key={project.id} {...rest} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;

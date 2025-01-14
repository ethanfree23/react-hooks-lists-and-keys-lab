import React from "react";
import ProjectList from "./ProjectList";


function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const techItems = technologies.map((tech) => (
    <span key={tech}>
      {tech}
    </span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techItems}
      </div>
    </div>
  );
}

export default ProjectItem;

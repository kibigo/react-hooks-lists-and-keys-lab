import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectName = projects.map((project) => {
    return (
      <div key={project.id}>
        <h2>{project.name}</h2>
        <p>{project.about}</p>
        <p>{project.technologies.join(', ')}</p>
      </div>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectName}</div>
    </div>
  );
}

export default ProjectList;

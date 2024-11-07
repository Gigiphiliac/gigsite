import "./ProjectList.css";
import projectsJSON from "../../data/github_projects.json";
import Project from "../Project/Project";

function ProjectList() {
  return (
    <div>
      {projectsJSON.map((project) => (
        <Project
          id={project.id}
          name={project.name}
          description={project.description}
          github_url={project.github_url}
          skills={project.skills}
        />
      ))}
    </div>
  );
}

export default ProjectList;

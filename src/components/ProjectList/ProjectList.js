import "./ProjectList.css";
import Project from "../Project/Project";

function ProjectList({ projects }) {
  return (
    <div className="project-list-container">
      {projects.map((project) => (
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

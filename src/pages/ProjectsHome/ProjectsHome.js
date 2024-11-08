import "./ProjectsHome.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProjectList from "../../components/ProjectList/ProjectList";
import projectsJSON from "../../data/github_projects.json";

function ProjectsHome() {

  return (
    <div className="projects-home-container">
      <Sidebar />
      <div className="projects-home-content-container">
        <h1 className="projects-home-header">My Projects</h1>
        <ProjectList projects={projectsJSON} />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default ProjectsHome;

import "./ProjectsHome.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProjectList from "../../components/ProjectList/ProjectList";

function ProjectsHome() {

  return (
    <div className="projects-home-container">
      <Sidebar />
      <div className="projects-home-content-container">
        <h1>My Projects</h1>
        <ProjectList />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default ProjectsHome;

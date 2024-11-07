import "./Project.css";
import { Link } from "react-router-dom";
import github_logo from "../../assets/github-mark.svg";

function Project({ id, name, description, github_url, skills }) {
  return (
    <div className="project-container">
      <h2 className="project-title">
        {name}
        <Link to={github_url}>
          <img
            src={github_logo}
            alt={name + " GitHub"}
            className="project-link-image"
          />
        </Link>
      </h2>
      <p className="project-description">{description}</p>
      <div className="project-skills">
        <h4>Skills:</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;

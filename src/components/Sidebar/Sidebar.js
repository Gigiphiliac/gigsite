import "./Sidebar.css";
import LinkList from "../LinkList/LinkList";
import github_logo from "../../assets/github-mark.svg";
import gmail_logo from "../../assets/gmail-logo.png";
import linkedin_logo from "../../assets/linkedin-logo.png";
import blurry_pfp from "../../assets/blurry-me.jpg";
import { Link } from "react-router-dom";

const linksData = [
  {
    alt: "Email",
    url: "mailto:claydiebear+gigsite@gmail.com",
    image: gmail_logo,
  },
  {
    alt: "GitHub",
    url: "https://github.com/Gigiphiliac",
    image: github_logo,
  },
  {
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/clayton-phillips-92b857270/",
    image: linkedin_logo,
  },
];

function Sidebar() {
  return (
    <div className="sidebar-container">
      {/* Profile pic */}
      <img
        src={blurry_pfp}
        alt="Blurry pic of me"
        className="blurry-image"
      />

      {/* Nav section */}
      <nav className="sidebar-navigation">
        <ul>
          <li>
            <Link to="/">
              <span>🏠</span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>🛠</span>
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* My Links section */}
      <div className="sidebar-links">
        <h3>My Socials</h3>
        <div className="sidebar-link-logos">
          <LinkList links={linksData} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import "./Sidebar.css";
import LinkList from "../LinkList/LinkList";
import github_logo from "../../assets/github-mark.svg";
import gmail_logo from "../../assets/gmail-logo.png";
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
];

function Sidebar() {
  return (
    <div className="sidebar-container">
      <p>Sidebar</p>

      {/* Nav section */}
      <nav className="sidebar-navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <LinkList links={linksData} />
    </div>
  );
}

export default Sidebar;

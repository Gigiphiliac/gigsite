import "./Sidebar.css";
import LinkList from "../LinkList/LinkList";
import github_logo from "../../assets/github-mark.svg";
import gmail_logo from "../../assets/gmail-logo.png";

function Sidebar() {
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

  return (
    <div className="sidebar-container">
      <p>Sidebar</p>
      <LinkList links={linksData} />
    </div>
  );
}

export default Sidebar;

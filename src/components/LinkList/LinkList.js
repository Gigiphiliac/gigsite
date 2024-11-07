import "./LinkList.css";
import { Link } from "react-router-dom";

function LinkList({ links }) {
  return (
    <ul className="link-list">
      {links.map((link, index) => (
        <li
          key={index}
          className="link-item"
        >
          <Link to={link.url}>
            <img
              src={link.image}
              alt={link.alt}
              className="link-image"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;

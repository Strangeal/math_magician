import "../App.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/math_magician/Calculator",
      text: "Calculator",
    },
    {
      id: 3,
      path: "/math_magician/quote",
      text: "Quote",
    },
  ];

  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="nav__brand">
          <Link to="/" className="brand__link">
            Math Magician
          </Link>
        </div>
        <ul className="nav__menu">
          {links.map((link) => (
            <li key={link.id} className="nav__item">
              {" "}
              |
              <NavLink
                to={link.path}
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
                end
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

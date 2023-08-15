import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <NavLink
              to="/staff"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              All Staff
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              All Pets
            </NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div>
        <Link to="/">
            <span className="fa fa-tasks" />
        </Link>
          <ul>
          <li>
          <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="/"
              >
                Home
          </NavLink>
            </li>
            <li>
            <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="favourite"
              >
                Favourite
              </NavLink>
            </li>
            <li>
            <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to="about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
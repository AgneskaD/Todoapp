import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { NavLink } from "../NavLink/NavLink";

export const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div>
          <a href="/">
            <span className="fa fa-tasks" />
          </a>
          <ul>
            <NavLink>home</NavLink>
            <NavLink>favourite</NavLink>
            <NavLink>about</NavLink>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="favourite">Favourite</Link>
            </li>
            <li>
            <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
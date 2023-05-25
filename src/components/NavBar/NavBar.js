import styles from "./NavBar.module.scss";
import Container from "../Container/Container";

export const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <Container>
        <div>
          <a href="/">
            <span className="fa fa-tasks" />
          </a>
          <ul>
          <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="favourite">Favourite</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
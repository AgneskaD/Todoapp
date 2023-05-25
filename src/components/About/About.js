import styles from "../Hero/Hero.module.scss";
import { PageTitle } from "../PageTitle/PageTitle";

export const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle style={styles.title}>About</PageTitle>
      <p>A simple to-do app, with lists, columns and card</p>
    </div>
  );
};

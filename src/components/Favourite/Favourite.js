import styles from "../Hero/Hero.module.scss";
import { PageTitle } from "../PageTitle/PageTitle";

export const Favourite = () => {
  return (
    <div className={styles.hero}>
      <PageTitle style={styles.title}>Favourite</PageTitle>
      <p>A simple to-do app, with lists, columns and card</p>
    </div>
  );
};
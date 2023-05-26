import styles from "../Favourite/Favourite.module.scss";
import { PageTitle } from "../PageTitle/PageTitle";

export const Favourite = () => {
  return (
    <div className={styles.hero}>
      <PageTitle style={styles.title}>Favourite</PageTitle>
      <article className={styles.column}></article>
    </div>
  );
};
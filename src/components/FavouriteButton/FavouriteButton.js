import styles from "./FavouriteButton.module.scss";

export const FavouriteButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
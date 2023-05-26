import styles from "./FavouriteButton.module.scss";
import clsx from "clsx";

export const FavouriteButton = ({ children, isFavourite, action }) => {
    return (
      <button
        onClick={action}
        className={clsx(styles.button, isFavourite && styles.active)}
      >
        {children}
      </button>
    );
};
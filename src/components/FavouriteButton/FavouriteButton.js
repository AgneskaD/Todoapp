import styles from "./FavouriteButton.module.scss";
import clsx from "clsx";

export const FavouriteButton = ({ children, favourite, action }) => {
    return (
      <button
        onClick={action}
        className={clsx(styles.button, favourite && styles.active)}
      >
        {children}
      </button>
    );
};
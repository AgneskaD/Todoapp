import styles from "./DeleteButton.module.scss";

export const DeleteButton = ({ children, action }) => {
  return (
    <button onClick={action} className={styles.button}>
      {children}
    </button>
  );
};
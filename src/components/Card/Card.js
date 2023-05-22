import styles from "./Card.module.scss";

const Card = ({ title }) => {
    return (
        <div>
          <li className={styles.card}>{title}</li>
        </div>
      );
};

export default Card;
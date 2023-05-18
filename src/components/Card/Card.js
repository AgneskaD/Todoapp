import styles from "./Card.module.scss";

const Card = (props) => {
    return (
        <div>
          <li className={styles.card}>{props.title}</li>
        </div>
      );
};

export default Card;
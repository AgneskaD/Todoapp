import styles from "./Card.module.scss";
import Card from "../Card/Card";

const Card = (props) => {
  return <li className={styles.card}>{props.title}</li>;
};

export default Card;
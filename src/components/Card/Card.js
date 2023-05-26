import { Button } from "../Button/Button";
import styles from "./Card.module.scss";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";

const Card = ({ title }) => {
    return (
        <div>
          <li className={styles.card}>
        {title}
        <FavouriteButton>
          <span className="fa fa-star-o" />
        </FavouriteButton>
      </li>
        </div>
      );
};

export default Card;
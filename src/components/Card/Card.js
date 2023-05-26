import styles from "./Card.module.scss";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";
import { useState } from "react";

const Card = ({ title }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

    return (
      <div>
       <li className={styles.card}>
        {title}
        <FavouriteButton isFavourite={isFavourite} action={toggleFavourite}>
          <span className="fa fa-star-o" />
        </FavouriteButton>
       </li>
      </div>
  );
};

export default Card;
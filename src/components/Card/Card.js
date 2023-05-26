import styles from "./Card.module.scss";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";
import { useDispatch } from "react-redux";
import { toggleCardFavourite } from "../../redux/store";

const Card = ({ title, isFavourite, id }) => {
  const dispatch = useDispatch();

  const toggleFavourite = () => {
    dispatch(toggleCardFavourite(id));
  };

    return (
      <div>
       <li className={styles.card}>
        {title}
        <FavouriteButton favourite={isFavourite} action={toggleFavourite}>
          <span className="fa fa-star-o" />
        </FavouriteButton>
       </li>
      </div>
  );
};

export default Card;
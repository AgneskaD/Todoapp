import styles from "./Card.module.scss";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { useDispatch } from "react-redux";
import { toggleCardFavourite } from "../../redux/store";
import { removeCard } from "../../redux/store";

const Card = ({ title, isFavourite, id }) => {
  const dispatch = useDispatch();

  const toggleFavourite = () => {
    dispatch(toggleCardFavourite(id));
  };

  const handleRemove = () => {
    dispatch(removeCard(id));
  };  
  
  return (
      <div>
       <li className={styles.card}>
        {title}
        <div className={styles.buttonsBox}>
          <FavouriteButton favourite={isFavourite} action={toggleFavourite}>
            <span className="fa fa-star-o" />
          </FavouriteButton>
          <DeleteButton action={handleRemove}>
            <span className="fa fa-trash" />
          </DeleteButton>
        </div>
       </li>
      </div>
  );
};

export default Card;
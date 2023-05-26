import styles from "./Favourite.module.scss";
import { PageTitle } from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { selectFavouriteCard } from "../../redux/store";

export const Favourite = () => {
    const favouriteCards = useSelector((state) => selectFavouriteCard(state));
    
  return (
    <div className={styles.hero}>
      <PageTitle style={styles.title}>Favourite</PageTitle>
      <article className={styles.column}></article>
    </div>
  );
};
import styles from "./Favourite.module.scss";
import { PageTitle } from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { selectFavouriteCards } from "../../redux/cardsRedux";
import Card from "../Card/Card";

export const Favourite = () => {
    const favouriteCards = useSelector((state) => selectFavouriteCards(state));

  return (
    <div className={styles.hero}>
      <PageTitle style={styles.title}>Favourite</PageTitle>
      <p className={styles.subtitle}>
        There is a column with your Favourite cards
      </p>
      <article className={styles.column}>
        {favouriteCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </article>
    </div>
  );
};
import shortid from "shortid";
export const selectFilteredCards = ({ cards }, columnId) => cards.filter(card => card.columnId === columnId);
export const selectFavouriteCards = ({ cards }) => cards.filter(card => card.isFavourite);

export const toggleCardFavourite = (payload) => ({ type: "TOGGLE_CARD_FAVOURITE", payload });
export const removeCard = payload => ({ type: "REMOVE_CARD", payload });
export const addCard = payload => ({ type: "ADD_CARD", payload });

export const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...statePart, { ...action.payload, id: shortid() }];

      case "REMOVE_CARD":
        return [...statePart.filter((card) => card.id !== action.payload)];
  

    case "TOGGLE_CARD_FAVOURITE":
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavourite: !card.isFavourite }
          : card
      );

    default:
      return statePart;
  }
};
// eslint-disable-next-line no-unused-expressions
``
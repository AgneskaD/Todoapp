import { initialState } from "./initialState";
import { createStore } from "redux";
import shortid from "shortid";

export const selectFilteredCards = (state, columnId) =>
  state.cards.filter(
    (card) =>
      card.columnId === columnId &&
      card.title.toLowerCase().includes(state.searchInput.toLowerCase())
  );
  
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };

    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };

    case "UPDATE_COLUMNS":
      return { ...state, searchInput: action.payload.title.toLowerCase() };

    default:
      return state;
  }
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
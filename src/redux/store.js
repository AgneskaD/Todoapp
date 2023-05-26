import { listsReducer } from "./listsRedux";
import { searchInputReducer } from "./searchInputRedux";

export const selectAllColumns = (state) => state.columns;
export const selectColumnsByList = ({ columns }, id) =>
  columns.filter(({ listId }) => listId === id);

export const selectFilteredCards = ({ cards, searchInput }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchInput)
  );
  export const selectFavouriteCard = ({ cards }) =>
  cards.filter(({ isFavourite }) => isFavourite === true);

export const selectAllLists = (state) => state.lists;
export const selectListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const selectSearchInputValue = (state) => state.searchInput;
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const removeCard = (payload) => ({ type: "REMOVE_CARD", payload });
export const addList = (payload) => ({ type: "ADD_LIST", payload });
export const toggleCardFavourite = (payload) => ({
    type: "TOGGLE_CARD_FAVOURITE",
    payload,
  });

  export const updateColumns = (payload) => ({ type: "UPDATE_COLUMNS", payload });

  const subReducers = {
    columns: columnsReducer,
    cards: cardsReducer,
    lists: listsReducer,
    searchInput: searchInputReducer,
  };
  const reducer = combineReducers(subReducers);
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;
import { initialState } from "./initialState";
import { createStore, combineReducers } from "redux";
import { columnsReducer } from "./columnsRedux";
import { cardsReducer } from "./cardsRedux";
import { listsReducer } from "./listsRedux";
import { searchInputReducer } from "./searchInputRedux";

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
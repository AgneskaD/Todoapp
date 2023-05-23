import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "ADD_COLUMN")
    return { ...state, columns: [...state.columns, action.newColumn] };
  return state;
};
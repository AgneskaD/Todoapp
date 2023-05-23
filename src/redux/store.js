import { createStore } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_COLUMN":
          return {
            ...state,
            columns: [...state.columns, { id: shortid(), ...action.payload }],
          };
        default:
          return state;
      }
};
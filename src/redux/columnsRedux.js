import shortid from "shortid";

const ADD_COLUMN = "app/column/ADD_COLUMN";

/* selectors */
export const selectColumnsByList = ({ columns }, id) =>
  columns.filter(({ listId }) => listId === id);
/* actions */
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

export const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  }
};
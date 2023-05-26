import shortid from "shortid";

export const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  }
};
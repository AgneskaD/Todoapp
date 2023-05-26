import shortid from "shortid";

const ADD_LIST = "app/lists/ADD_LIST";
/* selectors */
export const selectAllLists = (state) => state.lists;
export const selectListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
/* actions */
export const addList = (payload) => ({ type: ADD_LIST, payload });


export const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  }
};
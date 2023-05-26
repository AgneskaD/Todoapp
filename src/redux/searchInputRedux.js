const UPDATE_COLUMNS = "app/searchInput/UPDATE_COLUMNS";

/* selectors */
export const selectSearchInputValue = (state) => state.searchInput;
/* actions */
export const updateColumns = (payload) => ({ type: UPDATE_COLUMNS, payload });


export const searchInputReducer = (statePart = "", action) => {
    switch (action.type) {
        case UPDATE_COLUMNS:
        return action.payload.title.toLowerCase();
  
      default:
        return statePart;
    }
  };
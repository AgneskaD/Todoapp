export const searchInputReducer = (statePart = "", action) => {
    switch (action.type) {
      case "UPDATE_COLUMNS":
        return action.payload.title.toLowerCase();
  
      default:
        return statePart;
    }
  };
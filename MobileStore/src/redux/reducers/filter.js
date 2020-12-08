const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'FILTER': {
      const filters = action.payload;
      return filters;
    }
    default:
      return state;
  }
};
export default filterReducer;

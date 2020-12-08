const initialState = {
  show: false,
  filters: '',
};
const searchbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW': {
      return {...state, show: true};
    }
    case 'HIDE': {
      return {...state, show: false};
    }
    default: {
      return state;
    }
  }
};
export default searchbarReducer;

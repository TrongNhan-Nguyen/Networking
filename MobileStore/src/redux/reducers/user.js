const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      const user = action.payload;
      return user;
    }
    case 'SIGN_OUT': {
      return null;
    }
    default:
      return state;
  }
};
export default userReducer;


export const userLoggedInReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...action.payload };
    case 'USER_LOGOUT':
      return {};
    case 'ERROR':
      return {...action.payload}
    default:
      return state;
  }
};


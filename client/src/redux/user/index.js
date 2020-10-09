export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      }
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default user;

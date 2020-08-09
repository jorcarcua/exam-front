import * as types from '../constants/actionTypes';

const initialState = {
  user: null,
  inProgress: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.START_ASYNC_USER:
      return {
        ...state,
        inProgress: true,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.user,
        inProgress: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        inProgress: false,
      };
    default:
      return state;
  }
};

export const getUser = (state) => {
  return state.user;
};

export default user;

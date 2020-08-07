import * as types from '../constants/actionTypes';

const loading = (state = false, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return true;

    case types.END_LOADING:
      return false;
    default:
      return state;
  }
};

export default loading;

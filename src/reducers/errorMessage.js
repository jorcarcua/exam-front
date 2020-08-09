import * as types from '../constants/actionTypes';

const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type !== types.SHOW_ERROR) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

export default errorMessage;

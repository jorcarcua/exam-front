import * as types from '../constants/actionTypes';

const nextQuestion = (state = {}, action) => {
  switch (action.type) {
    case types.RANDOM_QUESTION:
      return action.question;
    default:
      return state;
  }
};

export default nextQuestion;

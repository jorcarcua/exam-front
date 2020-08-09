import * as types from '../constants/actionTypes';

const initialState = {
  list: [],
  random: {},
  inProgress: false,
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case types.START_ASYNC_QUESTION:
      return {
        ...state,
        inProgress: true,
      };
    case types.RECEIVE_QUESTIONS:
      return {
        ...state,
        list: action.questions,
        inProgress: false,
      };

    case types.ADD_QUESTION:
      return {
        ...state,
        list: [...state.list, action.question],
        inProgress: false,
      };

    case types.EDIT_QUESTION:
      return {
        ...state,
        list: state.list.map((question) =>
          question._id !== action.question._id ? question : action.question
        ),
        inProgress: false,
      };

    case types.DELETE_QUESTION:
      return {
        ...state,
        list: state.list.filter((question) => question._id !== action.id),
        inProgress: false,
      };

    case types.RANDOM_QUESTION:
      return {
        ...state,
        random: action.question,
        inProgress: false,
      };
    default:
      return state;
  }
};

export default questions;

export const getQuestionById = (id, state) => {
  const result = state.list.find((question) => question._id === id);
  return result;
};

export const getQuestions = (state) => {
  return state.list;
};

export const showQuestionLoading = (state) => {
  return state.inProgres;
};

export const getRandomQuestion = (state) => {
  return state.random;
};

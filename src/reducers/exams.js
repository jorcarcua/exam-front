import * as types from '../constants/actionTypes';

const initialState = {
  list: [],
  inProgress: false,
};

const exams = (state = initialState, action) => {
  switch (action.type) {
    case types.START_ASYNC_EXAM:
      return {
        ...state,
        inProgress: true,
      };

    case types.RECEIVE_EXAMS:
      return {
        ...state,
        list: action.exams,
        inProgress: false,
      };

    case types.ADD_EXAM:
      return {
        ...state,
        list: [...state.list, action.exam],
        inProgress: false,
      };

    case types.EDIT_EXAM:
      return {
        ...state,
        list: state.list.map((exam) =>
          exam._id !== action.exam._id ? exam : action.exam
        ),
        inProgress: false,
      };

    case types.DELETE_EXAM:
      return {
        ...state,
        list: state.list.filter((exam) => exam._id !== action.id),
        inProgress: false,
      };

    case types.SHOW_ERROR:
      return {
        ...state,
        inProgress: false,
      };

    default:
      return state;
  }
};

export default exams;

export const getExamById = (state, id) => {
  const result = state.list.find((exam) => exam._id === id);
  return result;
};

export const getExamList = (state) => {
  return state.list;
};

export const showExamLoading = (state) => {
  return state.inProgress;
};

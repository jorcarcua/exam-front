import exams, * as fromExams from './exams';
import questions, * as fromQuestions from './questions';
import errorMessage from './errorMessage';
import user, * as fromUser from './user';
import { combineReducers } from 'redux';

export default combineReducers({
  exams,
  questions,
  user,
  errorMessage,
});

// EXAMS
export const getExamById = (state, id) => {
  return fromExams.getExamById(state.exams, id);
};

export const getExamList = (state) => {
  return fromExams.getExamList(state.exams);
};

export const showExamLoading = (state) => {
  return fromExams.showExamLoading(state.exams);
};

// QUESTIONS
export const getQuestionById = (id, state) => {
  return fromQuestions.getQuestionById(id, state.questions);
};

export const getQuestions = (state) => {
  return fromQuestions.getQuestions(state.questions);
};

export const showQuestionLoading = (state) => {
  return fromQuestions.showQuestionLoading(state.questions);
};

export const getRandomQuestion = (state) => {
  return fromQuestions.getRandomQuestion(state.questions);
};

// USER
export const getUser = (state) => {
  return fromUser.getUser(state.user);
};

// ERROR
export const getErrorMessage = (state) => {
  return state.errorMessage;
};

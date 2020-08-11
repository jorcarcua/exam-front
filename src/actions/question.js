export default ({ server, types, commonActions }) => {
  const { showError } = commonActions;

  const startAsyncQuestion = () => ({
    type: types.START_ASYNC_QUESTION,
  });

  const receiveQuestions = (questions) => ({
    type: types.RECEIVE_QUESTIONS,
    questions: questions,
  });
  const editQuestion = (question) => ({
    type: types.EDIT_QUESTION,
    question,
  });

  const addQuestion = (question) => ({
    type: types.ADD_QUESTION,
    question,
  });

  const deleteQuestion = (id) => ({
    type: types.DELETE_QUESTION,
    id,
  });

  const getRandomQuestion = (question) => ({
    type: types.RANDOM_QUESTION,
    question,
  });

  const getQuestionsByExam = (id) => async (dispatch) => {
    try {
      dispatch(startAsyncQuestion());
      const res = await server._getQuestionsExam(id);
      dispatch(receiveQuestions(res));
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleAddQuestion = (question, history) => async (dispatch) => {
    try {
      dispatch(startAsyncQuestion());
      const res = await server._addQuestion(question);
      dispatch(addQuestion(res));
      history.push(`/questionList/${res.exam}`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleEditQuestion = (question, history) => async (dispatch) => {
    try {
      dispatch(startAsyncQuestion());
      const { id, ...newQuestion } = question;
      const res = await server._editQuestion(newQuestion, id);
      dispatch(editQuestion(res));
      history.push(`/questionDetail/${id}`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleDeleteQuestion = (id, history) => async (dispatch) => {
    try {
      dispatch(startAsyncQuestion());
      const res = await server._deleteQuestion(id);
      dispatch(deleteQuestion(id));
      history.push(`/questionList/${res.exam}`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const getNextQuestion = (examId) => async (dispatch) => {
    try {
      dispatch(startAsyncQuestion());
      const res = await server._randomQuestion(examId);
      dispatch(getRandomQuestion(res));
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  return {
    getQuestionsByExam,
    handleEditQuestion,
    handleAddQuestion,
    handleDeleteQuestion,
    getNextQuestion,
  };
};

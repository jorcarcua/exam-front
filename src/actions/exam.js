export default ({ server, types, commonActions }) => {
  const { showError, resetError, startLoading, endLoading } = commonActions;

  const receiveExams = (exams) => ({
    type: types.RECEIVE_EXAMS,
    exams,
  });

  const editExam = (exam) => ({
    type: types.EDIT_EXAM,
    exam,
  });

  const deleteExam = (id) => {
    return { type: types.DELETE_EXAM, id };
  };

  const addExam = (exam) => ({
    type: types.ADD_EXAM,
    exam,
  });

  const getExams = () => async (dispatch) => {
    try {
      dispatch(startLoading());
      const res = await server._getExams();
      dispatch(endLoading());
      dispatch(receiveExams(res));
    } catch (error) {
      dispatch(endLoading());
      dispatch(showError(error.message));
    }
  };

  const handleAddExam = (exam, history) => async (dispatch) => {
    try {
      const res = await server._addExam(exam);
      dispatch(addExam(res));
      dispatch(resetError());
      history.push(`/`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleEditExam = (exam, id, history) => async (dispatch) => {
    try {
      const res = await server._editExam(exam, id);
      dispatch(editExam(res));
      dispatch(resetError());
      history.push(`/examList`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleDeleteExam = (id) => async (dispatch) => {
    try {
      await server._deleteExam(id);
      dispatch(deleteExam(id));
      dispatch(resetError());
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  return {
    getExams,
    handleDeleteExam,
    handleAddExam,
    handleEditExam,
  };
};

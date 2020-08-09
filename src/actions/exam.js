export default ({ server, types, commonActions }) => {
  const { showError } = commonActions;

  const startAsyncExam = () => ({
    type: types.START_ASYNC_EXAM,
  });

  const receiveExams = (exams) => ({
    type: types.RECEIVE_EXAMS,
    exams,
  });

  const editExam = (exam) => ({
    type: types.EDIT_EXAM,
    exam,
  });

  const deleteExam = (id) => {
    return {
      type: types.DELETE_EXAM,
      id,
    };
  };

  const addExam = (exam) => ({
    type: types.ADD_EXAM,
    exam,
  });

  const getExams = () => async (dispatch) => {
    try {
      dispatch(startAsyncExam());
      const res = await server._getExams();
      dispatch(receiveExams(res));
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleAddExam = (exam, history) => async (dispatch) => {
    try {
      dispatch(startAsyncExam());
      const res = await server._addExam(exam);
      dispatch(addExam(res));
      history.push(`/examList`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleEditExam = (exam, id, history) => async (dispatch) => {
    try {
      dispatch(startAsyncExam());
      const res = await server._editExam(exam, id);
      dispatch(editExam(res));
      history.push(`/examList`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleDeleteExam = (id) => async (dispatch) => {
    try {
      dispatch(startAsyncExam());
      await server._deleteExam(id);
      dispatch(deleteExam(id));
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

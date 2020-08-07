import React from 'react';
import { getQuestionById } from '../../reducers/questions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { questionActions } from '../../actions';

const { handleDeleteQuestion } = questionActions;

const QuestionDetailContainer = ({
  loading,
  question,
  history,
  dispatch,
  errorMessage,
}) => {
  if (!question) {
    return null;
  }

  if (!loading) {
    return (
      <div>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <h1 className="mb-5">Question detail</h1>

        <div className="row">
          <div className="col-sm">
            <h3 className="mb-4">Text:</h3>
            <p>{question.text}</p>
          </div>
          <div className="col-sm">
            <h3 className="mb-4">Answers:</h3>
            {question.answers.map((answer) => (
              <p key={answer._id}>{answer.text}</p>
            ))}
          </div>
        </div>

        <Link
          class="btn btn-primary mr-1 mt-3"
          to={`/questionEdit/${question._id}`}
        >
          Edit
        </Link>
        <button
          className="btn btn-primary mr-1 mt-3"
          onClick={() => onDelete(question, history, dispatch)}
        >
          Delete
        </button>
        <button className="btn btn-primary mt-3" onClick={history.goBack}>
          Back
        </button>
      </div>
    );
  } else {
    console.log('esperaaaa');
    return <h3>Loading</h3>;
  }
};
const onDelete = async (question, history, dispatch) => {
  await dispatch(handleDeleteQuestion(question._id, history));
};

const mapStateToProps = (state, { match }) => ({
  question: getQuestionById(match.params.questionId, state),
  loading: state.loading,
  errorMessage: state.errorMessage,
});

export default withRouter(connect(mapStateToProps)(QuestionDetailContainer));

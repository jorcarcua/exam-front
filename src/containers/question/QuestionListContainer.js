import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { questionActions } from '../../actions';
import { QuestionList, Error, Loading } from '../../components';

import { getQuestions, getErrorMessage, showExamLoading } from '../../reducers';

const { getQuestionsByExam } = questionActions;

class QuestionListContainer extends Component {
  componentDidMount() {
    const { getQuestionsByExam } = this.props;
    const { match } = this.props;
    getQuestionsByExam(match.params.examId);
  }

  render() {
    const { questions, errorMessage, loading, match } = this.props;

    return (
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <div>
            <QuestionList questions={questions} />
            <Link
              class="btn btn-primary"
              to={`/questionCreate/${match.params.examId}`}
            >
              Add Question
            </Link>{' '}
            <Link class="btn btn-primary" to={'/'}>
              Back
            </Link>{' '}
          </div>
        )}
      </div>
    );
  }
}

QuestionListContainer.propTypes = {
  questions: PropTypes.array,
  getQuestionsByExam: PropTypes.func,
  match: PropTypes.object,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  questions: getQuestions(state),
  errorMessage: getErrorMessage(state),
  loading: showExamLoading(state),
});

export default withRouter(
  connect(mapStateToProps, { getQuestionsByExam })(QuestionListContainer)
);

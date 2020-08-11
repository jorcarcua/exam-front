import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getQuestionById,
  showQuestionLoading,
  getErrorMessage,
} from '../../reducers';
import { questionActions } from '../../actions';
import { QuestionDetail, Error, Loading } from '../../components';

const { handleDeleteQuestion } = questionActions;

class QuestionDetailContainer extends Component {
  handleDelete = (question) => {
    const { handleDeleteQuestion, history } = this.props;
    handleDeleteQuestion(question._id, history);
  };

  goBack = () => {
    const { history, question } = this.props;
    history.push(`/questionList/${question.exam}`);
  };

  render() {
    const { errorMessage, loading, question } = this.props;
    if (!question) {
      return null;
    }
    return (
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <QuestionDetail
            question={question}
            onDelete={this.handleDelete}
            onGoBack={this.goBack}
          />
        )}
      </div>
    );
  }
}

QuestionDetailContainer.propTypes = {
  question: PropTypes.object,
  handleDeleteQuestion: PropTypes.func,
  history: PropTypes.object,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state, { match }) => ({
  question: getQuestionById(match.params.questionId, state),
  loading: showQuestionLoading(state),
  errorMessage: getErrorMessage(state),
});

export default withRouter(
  connect(mapStateToProps, { handleDeleteQuestion })(QuestionDetailContainer)
);

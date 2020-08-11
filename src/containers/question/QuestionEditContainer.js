import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getQuestionById,
  getErrorMessage,
  showQuestionLoading,
} from '../../reducers';
import { questionActions } from '../../actions';
import { QuestionForm, Error, Loading } from '../../components';

const { handleEditQuestion } = questionActions;

class QuestionEditContainer extends Component {
  handleSubmit = (question) => {
    const { handleEditQuestion, history } = this.props;
    handleEditQuestion(question, history);
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { question, errorMessage, loading } = this.props;
    return (
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <QuestionForm
            question={question}
            onSubmit={this.handleSubmit}
            onGoBack={this.goBack}
          />
        )}
      </div>
    );
  }
}

QuestionEditContainer.propTypes = {
  question: PropTypes.object,
  handleEditQuestion: PropTypes.func,
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
  connect(mapStateToProps, { handleEditQuestion })(QuestionEditContainer)
);

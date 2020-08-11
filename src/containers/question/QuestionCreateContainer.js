import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { questionActions } from '../../actions';
import { QuestionForm, Error, Loading } from '../../components';
import { getErrorMessage, showQuestionLoading } from '../../reducers';

const { handleAddQuestion } = questionActions;

class QuestionCreateContainer extends Component {
  handleSubmit = (question) => {
    const { match, history, handleAddQuestion } = this.props;
    const examId = match.params.examId;
    handleAddQuestion({ ...question, exam: examId }, history);
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { loading, errorMessage } = this.props;
    return (
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <QuestionForm
            errorMessage={errorMessage}
            onSubmit={this.handleSubmit}
            onGoBack={this.goBack}
          />
        )}
      </div>
    );
  }
}

QuestionCreateContainer.propTypes = {
  handleAddQuestion: PropTypes.func,
  loading: PropTypes.bool,
  history: PropTypes.object,
  match: PropTypes.object,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: showQuestionLoading(state),
  errorMessage: getErrorMessage(state),
});

export default withRouter(
  connect(mapStateToProps, { handleAddQuestion })(QuestionCreateContainer)
);

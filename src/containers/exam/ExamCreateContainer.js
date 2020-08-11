import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { examActions } from '../../actions';
import { getErrorMessage, showExamLoading } from '../../reducers';
import { Error, Loading, ExamForm } from '../../components';

const { handleAddExam } = examActions;

class ExamCreateContainer extends Component {
  createExam = (exam) => {
    const { handleAddExam, history } = this.props;
    handleAddExam(exam, history);
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { errorMessage, loading } = this.props;
    return (
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <ExamForm
            errorMessage={errorMessage}
            onSubmit={this.createExam}
            onGoBack={this.goBack}
          />
        )}
      </div>
    );
  }
}

ExamCreateContainer.propTypes = {
  handleAddExam: PropTypes.func,
  errorMessage: PropTypes.string,
  history: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
  loading: showExamLoading(state),
});

export default withRouter(
  connect(mapStateToProps, { handleAddExam })(ExamCreateContainer)
);

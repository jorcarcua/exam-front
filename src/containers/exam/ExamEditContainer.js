import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { examActions } from '../../actions';
import { getExamById, getErrorMessage, showExamLoading } from '../../reducers';
import { connect } from 'react-redux';
import { Error, Loading, ExamForm } from '../../components';

const { handleEditExam } = examActions;

class ExamEditContainer extends Component {
  editExam = (exam) => {
    const { handleEditExam, history } = this.props;
    handleEditExam(exam, history);
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { errorMessage, loading, exam } = this.props;
    return (
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <ExamForm
            errorMessage={errorMessage}
            exam={exam}
            onSubmit={this.editExam}
            onGoBack={this.goBack}
          />
        )}
      </div>
    );
  }
}

ExamEditContainer.propTypes = {
  exam: PropTypes.object,
  handleEditExam: PropTypes.func,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = (state, { match }) => ({
  exam: getExamById(state, match.params.examId),
  errorMessage: getErrorMessage(state),
  loading: showExamLoading(state),
});

export default connect(mapStateToProps, { handleEditExam })(ExamEditContainer);

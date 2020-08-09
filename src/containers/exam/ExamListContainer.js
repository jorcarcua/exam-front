import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ExamList } from '../../components';
import { examActions } from '../../actions';
import { getExamList, getErrorMessage, showExamLoading } from '../../reducers';

const { editExam, handleDeleteExam, getExams } = examActions;

class ExamListContainer extends Component {
  componentDidMount() {
    const { getExams } = this.props;
    getExams();
  }

  render() {
    const { exams, errorMessage, loading, handleDeleteExam } = this.props;
    return (
      <ExamList
        exams={exams}
        onEdit={() => editExam()}
        onDelete={handleDeleteExam}
        errorMessage={errorMessage}
        loading={loading}
      />
    );
  }
}

ExamListContainer.propTypes = {
  exams: PropTypes.array,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  handleDeleteExam: PropTypes.func,
  getExams: PropTypes.func,
};

const mapStateToProps = (state) => ({
  exams: getExamList(state),
  errorMessage: getErrorMessage(state),
  loading: showExamLoading(state),
});

export default connect(mapStateToProps, { handleDeleteExam, getExams })(
  ExamListContainer
);

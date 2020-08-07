import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ExamList } from '../../components';
import { examActions } from '../../actions';

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
  exams: PropTypes.object,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  handleDeleteExam: PropTypes.func,
  getExams: PropTypes.func,
};

const mapStateToProps = (state) => ({
  exams: state.exams,
  errorMessage: state.errorMessage,
  loading: state.loading,
});

export default connect(mapStateToProps, { handleDeleteExam, getExams })(
  ExamListContainer
);

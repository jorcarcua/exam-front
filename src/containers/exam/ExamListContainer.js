import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ExamList, Error, Loading } from '../../components';
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
      <div>
        <Error message={errorMessage} />
        {loading ? (
          <Loading />
        ) : (
          <ExamList
            exams={exams}
            onEdit={() => editExam()}
            onDelete={handleDeleteExam}
          />
        )}
      </div>
    );
  }
}

ExamListContainer.propTypes = {
  exams: PropTypes.array,
  handleDeleteExam: PropTypes.func,
  getExams: PropTypes.func,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  exams: getExamList(state),
  errorMessage: getErrorMessage(state),
  loading: showExamLoading(state),
});

export default connect(mapStateToProps, { handleDeleteExam, getExams })(
  ExamListContainer
);

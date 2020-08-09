import PropTypes from 'prop-types';
import ExamDetail from './ExamDetail';
import React from 'react';
import { Error, Loading } from '../../components';

const ExamList = ({ exams, errorMessage, loading, onEdit, onDelete }) => (
  <div>
    {loading ? (
      <Loading />
    ) : (
      <div>
        <h1>Exam List</h1>
        <Error message={errorMessage} />
        <p className="lead"> These are all the exams you have access to </p>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Number Questions</th>
              <th>List Questions</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Add Question</th>
              <th>Start Exam</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <ExamDetail
                exam={exam}
                onEdit={onEdit}
                onDelete={() => onDelete(exam._id)}
                key={exam.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

ExamList.propTypes = {
  exams: PropTypes.array,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ExamList;

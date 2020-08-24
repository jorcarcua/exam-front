import PropTypes from 'prop-types';
import ExamDetail from './ExamDetail';
import React from 'react';

const ExamList = ({ exams, onEdit, onDelete }) => (
  <div>
    <h1>Exam List</h1>
    <p className="lead"> These are all the exams you have access to </p>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Number Of Questions</th>
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
            key={exam._id}
          />
        ))}
      </tbody>
    </table>
  </div>
);

ExamList.propTypes = {
  exams: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ExamList;

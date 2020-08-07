import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({ questions }) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question) => (
          <tr key={question._id}>
            <td> {question.text}</td>
            <td>
              {' '}
              <Link to={`/questionDetail/${question._id}`}>View Question</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default QuestionList;

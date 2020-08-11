import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionDetail = ({ question, onDelete, onGoBack }) => (
  <div>
    <h1 className="mb-5">Question detail</h1>

    <div className="row">
      <div className="col-sm">
        <h3 className="mb-4">Text:</h3>
        <p>{question.text}</p>
      </div>
      <div className="col-sm">
        <h3 className="mb-4">Answers:</h3>
        {question.answers.map((answer) => (
          <p key={answer._id}>{answer.text}</p>
        ))}
      </div>
    </div>

    <Link
      class="btn btn-primary mr-1 mt-3"
      to={`/questionEdit/${question._id}`}
    >
      Edit
    </Link>
    <button
      className="btn btn-primary mr-1 mt-3"
      onClick={() => onDelete(question)}
    >
      Delete
    </button>
    <button className="btn btn-primary mt-3" onClick={() => onGoBack()}>
      Back
    </button>
  </div>
);

QuestionDetail.propTypes = {
  question: PropTypes.object,
  onDelete: PropTypes.func,
  onGoBack: PropTypes.func,
};

export default QuestionDetail;

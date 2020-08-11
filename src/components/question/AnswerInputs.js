import React from 'react';

const AnswerInputs = ({ answers }) =>
  answers.map((answer, idx) => {
    return (
      <div key={idx}>
        <div className="form-group ">
          <label>Text</label>
          <textarea
            className="form-control"
            data-id={idx}
            value={answer.text}
            name="answer-text"
          />
        </div>
        <br></br>
        <div className="form-check">
          <input
            id="correct"
            className="form-check-input"
            data-id={idx}
            type="checkbox"
            name="answer-correct"
            {...(answer.correct === true ? { checked: true } : {})}
          />
          <label htmlFor="correct">Correct</label>
        </div>
      </div>
    );
  });

export default AnswerInputs;

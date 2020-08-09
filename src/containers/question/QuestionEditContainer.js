import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionById, getErrorMessage } from '../../reducers';
import { questionActions } from '../../actions';
import { withRouter } from 'react-router-dom';

class QuestionEditContainer extends Component {
  state = {
    question: {},
  };

  constructor(props) {
    super(props);
    const { question } = this.props;
    this.state = { question };
  }

  handleQuestionChange = (e) => {
    const newValue = e.target.value;
    this.setState((prevState) => {
      return { question: { ...prevState.question, text: newValue } };
    });
  };

  handleAnswerChange = (id, e) => {
    let newValue;
    let property;
    if (e.target.type === 'textarea') {
      property = 'text';
      newValue = e.target.value;
    } else {
      property = 'correct';
      newValue = e.target.value === 'on' ? true : false;
    }
    this.setState((prevState) => {
      const newAnswers = prevState.question.answers.map((answer) =>
        answer._id === id
          ? { ...answer, [property]: newValue }
          : property === 'correct'
          ? { ...answer, correct: false }
          : answer
      );
      return { question: { ...prevState.question, answers: newAnswers } };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { handleEditQuestion } = questionActions;
    const newAnswers = this.state.question.answers.map((answer) => {
      return { text: answer.text, correct: answer.correct };
    });
    const newQuestion = { text: this.state.question.text, answers: newAnswers };
    dispatch(handleEditQuestion(newQuestion, this.state.question._id, history));
  };

  render() {
    const { question } = this.state;
    const { history, errorMessage } = this.props;
    return (
      <div>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <h1 className="mb-5">Question Edition</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="text">Text</label>

              <textarea
                type="text"
                className="form-control"
                value={question.text}
                onChange={this.handleQuestionChange}
              />
            </div>

            <div className="col">
              <label htmlFor="answers">Answers</label>
              {question.answers.map((answer) => {
                return (
                  <div className="row" key={answer._id}>
                    <div className="col">
                      <textarea
                        type="text"
                        className="form-control"
                        value={answer.text}
                        onChange={(e) => this.handleAnswerChange(answer._id, e)}
                      />
                    </div>
                    <div className="col">
                      <label>Correct</label>
                      <input
                        className="form-control"
                        type="radio"
                        name="answer"
                        {...(answer.correct === true ? { checked: true } : {})}
                        onChange={(e) => this.handleAnswerChange(answer._id, e)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn btn-primary mr-1" type="submit">
            Save
          </button>
          <button className="btn btn-primary" onClick={history.goBack}>
            Back
          </button>
        </form>
      </div>
    );
  }
}

QuestionEditContainer.propTypes = {
  question: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state, { match }) => ({
  question: getQuestionById(match.params.questionId, state),
  errorMessage: getErrorMessage(state),
});

export default withRouter(connect(mapStateToProps)(QuestionEditContainer));

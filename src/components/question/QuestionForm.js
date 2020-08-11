import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AnswerInputs } from './../../components';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    const { question } = this.props;
    const initialState = this.initialState(question);
    this.state = { question: initialState };
  }

  initialState = (question) => {
    if (question) {
      const answers = question.answers.map((answer) => ({
        text: answer.text,
        correct: answer.correct,
      }));
      return { id: question._id, text: question.text, answers };
    } else {
      return this.getEmptyQuestion();
    }
  };

  getEmptyQuestion = () => {
    return {
      text: '',
      answers: [],
    };
  };

  handleChange = (e) => {
    const target = e.target;
    let newValue = target.value;
    let property = target.name;

    if (!property.startsWith('answer')) {
      this.setState((prevState) => {
        return { question: { ...prevState.question, [property]: newValue } };
      });
    } else {
      this.setState((prevState) => {
        property = property.replace('answer-', '');
        newValue =
          property === 'correct' ? (target.checked ? true : false) : newValue;
        let answers = [...this.state.question.answers];
        answers[target.dataset.id][property] = newValue;
        return { answers: answers };
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { question } = this.state;
    const { onSubmit } = this.props;
    onSubmit(question);
  };

  addAnswer = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        question: {
          ...prevState.question,
          answers: [
            ...prevState.question.answers,
            { text: '', correct: false },
          ],
        },
      };
    });
  };

  handleGoBack = (e) => {
    e.preventDefault();
    const { onGoBack } = this.props;
    onGoBack();
  };

  render() {
    console.log('en el redner');
    console.log(this.state);
    const { question } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        className="text-left"
      >
        <div className="form-group ">
          <label htmlFor="title">Title</label>
          <textarea
            id="title"
            className="form-control"
            value={question.text}
            placeholder="introduce text"
            maxLength={280}
            name="text"
          />
        </div>
        <br></br>
        <div>
          <label>Add Answer</label>{' '}
          <button
            id="addButton"
            className="btn btn-primary"
            onClick={this.addAnswer}
          >
            +
          </button>
        </div>

        <AnswerInputs answers={question.answers} />

        <br></br>

        <div>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <button className="btn btn-primary" onClick={this.handleGoBack}>
            Back
          </button>
        </div>
      </form>
    );
  }
}

QuestionForm.propTypes = {
  question: PropTypes.object,
  onSubmit: PropTypes.func,
  onGoBack: PropTypes.func,
};

export default QuestionForm;

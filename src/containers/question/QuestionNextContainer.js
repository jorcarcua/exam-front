import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { questionActions } from '../../actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getRandomQuestion, getErrorMessage } from '../../reducers';

const { getNextQuestion } = questionActions;

class QuestionNextContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getNextQuestion(match.params.examId));
  }

  checkAnswer = (e) => {
    e.preventDefault();
    const selected = this.state.selected;

    if (!(selected >= 0)) {
      alert('You must select an answer');
      return null;
    }
    e.preventDefault();
    const answers = this.props.question.answers;
    let success = false;
    success = answers[this.state.selected].correct;

    if (success) {
      this.setState({
        showResult: true,
        message: 'Congratulations the answer is right',
      });
    } else {
      this.setState({
        showResult: true,
        message: 'Sorry the answer is incorrect',
      });
    }
  };

  onChange = (id, e) => {
    this.setState({ selected: id });
  };

  getInitialState = () => {
    return {
      selected: -1,
      showResult: false,
      message: '',
    };
  };

  refreshState = () => {
    this.setState(this.getInitialState());
    const { dispatch, match } = this.props;
    dispatch(getNextQuestion(match.params.examId));
  };

  render() {
    const { question, errorMessage } = this.props;
    const { showResult } = this.state;
    if (!question.text) {
      return (
        <div>
          <p>There are no questions for this exams</p>
          <Link class="btn btn-primary mr-1 mt-3" to={'/'}>
            Back
          </Link>
        </div>
      );
    }

    return (
      <div>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <h3>Next Question</h3>
        <p>{question.text}</p>

        <div>
          <form onSubmit={this.checkAnswer}>
            {question.answers.map((answer, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name="answer"
                  checked={this.state.selected === idx}
                  onChange={(e) => this.onChange(idx, e)}
                />
                <label
                  style={
                    answer.correct && this.state.showResult
                      ? { border: '3px solid green' }
                      : {}
                  }
                >
                  {answer.text}
                </label>
              </div>
            ))}
            <br />

            {showResult ? (
              <div>
                <p>{this.state.message}</p>

                <Link
                  class="btn btn-primary mr-1 mt-3"
                  to={`/questionNext/${question.exam}`}
                  onClick={this.refreshState}
                >
                  Next Question
                </Link>
              </div>
            ) : (
              <div>
                <button className="btn btn-primary mr-1 mt-3" type="submit">
                  Send
                </button>
                <Link class="btn btn-primary mr-1 mt-3" to={'/'}>
                  Exit
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

QuestionNextContainer.propTypes = {
  question: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  question: getRandomQuestion(state),
  errorMessage: getErrorMessage(state),
});

export default withRouter(connect(mapStateToProps)(QuestionNextContainer));

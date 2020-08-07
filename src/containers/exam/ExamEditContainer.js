import React, { Component } from 'react';
import { examActions } from '../../actions';
import { getExamById } from '../../reducers';
import { connect } from 'react-redux';

class ExamEditContainer extends Component {
  state = {
    exam: '',
  };

  componentDidMount() {
    const { exam } = this.props;
    this.setState(() => ({ exam }));
  }

  handleSubmit = (e) => {
    const { handleEditExam } = examActions;
    const { dispatch, history } = this.props;
    e.preventDefault();
    const newExam = { title: this.state.exam.title };
    dispatch(handleEditExam(newExam, this.state.exam._id, history));
  };

  handleChange = (e) => {
    const exam = this.state.exam;
    exam.title = e.target.value;
    this.setState(exam);
  };

  render() {
    const { history, errorMessage } = this.props;
    return (
      <div>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <form onSubmit={this.handleSubmit} className="text-left">
          <div className="form-group ">
            <label htmlFor="title">Title:</label>
            <textarea
              className="form-control"
              onChange={this.handleChange}
              value={this.state.exam.title}
              id="title"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={history.goBack} className="btn btn-primary">
            Back
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  exam: getExamById(state, match.params.examId),
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps)(ExamEditContainer);

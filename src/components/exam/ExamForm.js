import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExamForm extends Component {
  constructor(props) {
    super(props);
    const { exam } = this.props;
    this.state = { exam: this.initialState(exam) };
  }

  initialState = (exam) => {
    return exam ? { id: exam._id, title: exam.title } : {};
  };

  handleChange = (e) => {
    const exam = this.state.exam;
    exam.title = e.target.value;
    this.setState(exam);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { exam } = this.state;
    onSubmit(exam);
  };

  handleGoBack = (e) => {
    e.preventDefault();
    const { onGoBack } = this.props;
    onGoBack();
  };

  render() {
    const { exam } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="text-left">
          <div className="form-group ">
            <label htmlFor="title">Title:</label>
            <textarea
              className="form-control"
              onChange={this.handleChange}
              value={exam.title}
              id="title"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button onClick={this.handleGoBack} className="btn btn-primary">
            Back
          </button>
        </form>
      </div>
    );
  }
}

ExamForm.propTypes = {
  exam: PropTypes.object,
  onSubmit: PropTypes.func,
  onGoBack: PropTypes.func,
};

export default ExamForm;

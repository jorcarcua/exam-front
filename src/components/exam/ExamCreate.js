import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExamCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { exam: {} };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((prevState) => {
      return { exam: { ...prevState.exam, [name]: value } };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const newExam = { title: this.state.exam.title };
    onSubmit(newExam);
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
              id="title"
              name="title"
              className="form-control"
              onChange={this.handleChange}
              value={exam.title}
              placeholder="introduce text"
              maxLength={280}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>{' '}
          <button onClick={this.handleGoBack} className="btn btn-primary">
            Back
          </button>
        </form>
      </div>
    );
  }
}

ExamCreate.propTypes = {
  onSubmit: PropTypes.func,
  onGoBack: PropTypes.func,
};

export default ExamCreate;

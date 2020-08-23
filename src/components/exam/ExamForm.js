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
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card pt-3">
            <div>
              <h2>Exam Form</h2>
            </div>

            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="title"
                    className="col-md-2 col-form-label text-md-right "
                  >
                    Title:
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      onChange={this.handleChange}
                      value={exam.title}
                      id="title"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary btn-space">
                    Submit
                  </button>
                  <button
                    onClick={this.handleGoBack}
                    className="btn btn-primary"
                  >
                    Back
                  </button>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label"></label>
                </div>
              </form>
            </div>
          </div>
        </div>
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

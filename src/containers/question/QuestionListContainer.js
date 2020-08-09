import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { questionActions } from '../../actions';
import { QuestionList } from '../../components';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../reducers';

class QuestionListContainer extends Component {
  componentDidMount() {
    const { getQuestions } = questionActions;
    const { match, dispatch } = this.props;

    dispatch(getQuestions(match.params.examId));
  }

  render() {
    const { questions } = this.props;

    return (
      <div>
        <QuestionList questions={questions} />
        <Link class="btn btn-primary" to={'/'}>
          Back
        </Link>
      </div>
    );
  }
}

QuestionListContainer.propTypes = {
  questions: PropTypes.array,
  match: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  questions: getQuestions(state),
});

export default withRouter(connect(mapStateToProps)(QuestionListContainer));

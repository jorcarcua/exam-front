import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { withRouter } from 'react-router-dom';
import { getErrorMessage } from '../../reducers';
import { Error, Loading, Login } from '../../components';

const { authenticate } = userActions;

class LoginContainer extends Component {
  state = {
    user: {
      username: '',
      password: '',
    },
  };

  handleSubmit = (user) => {
    const { authenticate, history } = this.props;
    authenticate(user, history);
  };

  render() {
    const { errorMessage, loading } = this.props;

    return (
      <div>
        <Error message={errorMessage} />
        {loading ? <Loading /> : <Login onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

LoginContainer.propTypes = {
  authenticate: PropTypes.func,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
});

export default withRouter(
  connect(mapStateToProps, { authenticate })(LoginContainer)
);

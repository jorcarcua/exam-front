import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    this.setState((prevState) => {
      return { user: { ...prevState.user, [property]: value } };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.user);
  };

  render() {
    const { user } = this.state;
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="form-control"
          name="username"
          onChange={this.handleChange}
          value={user.username}
          placeholder="Username"
          required
          autoFocus
        />

        <label htmlFor="pass" className="sr-only">
          Password
        </label>
        <input
          id="pass"
          type="password"
          className="form-control"
          name="password"
          onChange={this.handleChange}
          value={user.password}
          placeholder="Password"
          required
        />

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func,
};

export default Login;

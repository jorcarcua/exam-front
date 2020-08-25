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
      <div className="login-form">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header text-left">Login</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group row">
                    <label
                      htmlFor="username"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      Username
                    </label>
                    <div className="col-md-6">
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
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="pass"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      Password
                    </label>
                    <div className="col-md-6">
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
                    </div>
                  </div>
                  <div className="col-md-6 offset-md-3">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func,
};

export default Login;

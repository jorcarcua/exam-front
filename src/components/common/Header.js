import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link class="navbar-brand" to={'/'}>
        Exam App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {user ? (
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"></li>
            <li className="nav-item active">
              <Link class="nav-link" to={'/examList'}>
                Exam List
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to={'/examCreate'}>
                Create Exam
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to={'/Login'}
              >
                Profile
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link class="dropdown-item" onClick={onLogout} to={'/Logout'}>
                  Logout
                </Link>

                <Link class="dropdown-item">View your profile</Link>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to={'/Login'}
              >
                Start here
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link class="dropdown-item" to={'/Login'}>
                  Login
                </Link>
                <Link class="dropdown-item">Register</Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  </div>
);

export default Header;

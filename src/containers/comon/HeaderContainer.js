import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../../components';
import { userActions } from '../../actions';

const { handleLogout } = userActions;

const HeaderContainer = ({ user, handleLogout }) => {
  return (
    <div>
      <Header user={user} onLogout={() => handleLogout()} />
    </div>
  );
};

HeaderContainer.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { handleLogout })(HeaderContainer);

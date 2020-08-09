import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { ExamListContainer } from '../../containers';
import { Public } from '../../components';
import { getUser } from '../../reducers';

const HomeContainer = ({ user }) => (
  <div>{user ? <ExamListContainer /> : <Public />}</div>
);

HomeContainer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(HomeContainer);

export default ({ server, types, commonActions, auth }) => {
  const { showError } = commonActions;
  const { setToken, clearToken } = auth;

  const startAsyncUser = () => ({
    type: types.START_ASYNC_USER,
  });

  const logout = () => ({
    type: types.LOGOUT,
  });

  const login = (user) => ({
    type: types.LOGIN,
    user,
  });

  const authenticate = (user, history) => async (dispatch) => {
    try {
      dispatch(startAsyncUser());
      const res = await server._authenticate(user);
      setToken(res);
      const newUser = { token: res };
      dispatch(login(newUser));
      history.push(`/`);
    } catch (error) {
      dispatch(showError(error.message));
    }
  };

  const handleLogout = () => (dispatch) => {
    clearToken();
    dispatch(logout());
  };

  return {
    authenticate,
    handleLogout,
  };
};

export default ({ server, types, commonActions, auth }) => {
  const { showError, resetError } = commonActions;
  const { setToken, clearToken } = auth;

  const logout = () => ({
    type: types.LOGOUT,
  });

  const login = (user) => ({
    type: types.LOGIN,
    user,
  });

  const authenticate = (user, history) => async (dispatch) => {
    try {
      const res = await server._authenticate(user);
      setToken(res);
      const newUser = { token: res };
      console.log('el nuevo user');
      console.log(newUser);
      dispatch(login(newUser));
      dispatch(resetError());
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

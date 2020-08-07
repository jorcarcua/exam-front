const getToken = () => {
  return window.localStorage.getItem('jwt');
};

const setToken = (token) => {
  window.localStorage.setItem('jwt', token);
};

const clearToken = () => {
  setToken('');
};

const hasLogin = () => {
  console.log('hasLogin');
  console.log(getToken() !== 'js' ? true : false);
  return getToken() !== 'js' ? true : false;
};

export default {
  getToken,
  setToken,
  clearToken,
  hasLogin,
};

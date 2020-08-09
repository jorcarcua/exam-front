export default ({ types }) => ({
  showError: (error) => ({
    type: types.SHOW_ERROR,
    error,
  }),

  resetError: () => ({
    type: types.RESET_ERROR_MESSAGE,
  }),
});

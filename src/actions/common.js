export default ({types}) => ({

 startLoading : () => ({
    type: types.START_LOADING
}),

  endLoading : () => ({
    type: types.END_LOADING
}),



 showError : (error) => ({
    type: types.SHOW_ERROR,
    error
}),

 resetError : () => ({
    type: types.RESET_ERROR_MESSAGE
})

})
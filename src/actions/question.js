export default ({server, types, commonActions}) =>  {

    const {showError, resetError, startLoading, endLoading} = commonActions

    const receiveQuestions =   questions => ({
        type: types.RECEIVE_QUESTIONS,
        questions: questions
    }) 
    const  editQuestion =  (question) =>   ({
        type: types.EDIT_QUESTION,
        question
    }) 
    
    const addQuestion =  (question) => ({
        type: types.ADD_QUESTION,
        question
    }) 
    
    const  deleteQuestion =  (id) => ({
        type: types.DELETE_QUESTION,
        id
    }) 
    
    const  getRandomQuestion = (question) => ({
        type: types.RANDOM_QUESTION,
        question
    }) 
     
    const  getQuestions =  (id) => dispatch => {
    server._getQuestionsExam(id).then((questions) => {
        dispatch(receiveQuestions(questions))
    }
    )
} 

const  handleAddQuestion =  (question, history) => async (dispatch) => { 
   try{ 
      const res = await server._addQuestion(question)  
      dispatch(addQuestion(res))
      dispatch(resetError())
      history.push(`/questionList/${res.exam}`)
   }catch(error){ 
       dispatch(showError(error.message))
   }
} 

const  handleEditQuestion =  (question, id, history) => async (dispatch) => {
    try{  
        const res = await  server._editQuestion(question, id)   
        dispatch(editQuestion(res))
        dispatch(resetError())
        history.push(`/questionDetail/${id}`)
     }catch(error){ 
         dispatch(showError(error.message))
     } 
} 


const  handleDeleteQuestion =   (id, history) =>   async (dispatch) => { 
    try{  
     //   dispatch(startLoading())
        const res = await  server._deleteQuestion(id)  
     //   dispatch(endLoading()) 
        console.log('antes de delete')
        dispatch(deleteQuestion(id)) 
        console.log('despues de detele')
        dispatch(resetError())  
        history.push(`/questionList/${res.exam}`) 
     }catch(error){  
         dispatch(showError(error.message))
     }  
} 

const  getNextQuestion =  (examId) => async (dispatch) => {
   try{
        const res = await server._randomQuestion(examId)   
        dispatch(getRandomQuestion(res)) 
        dispatch(resetError())  
   } catch(error){
        console.log('hay un error')
        console.log(error.message)
         dispatch(showError(error.message))
   }
  
} 

return ({
    getQuestions,
    handleEditQuestion,
    handleAddQuestion,
    handleDeleteQuestion,
    getNextQuestion 
})

} 
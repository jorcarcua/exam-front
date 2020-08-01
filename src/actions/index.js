import * as types from '../constants/actionTypes'
import server from  '../utils/api/server'

export const getExams = () => dispatch => {
    server._getExams().then( (exams) => {
         dispatch(receiveExams(exams))
    }
 )
    
}
 

export  const  getQuestions =  (id) =>  dispatch => {
    console.log(`llega al getQuestions del server con id ${id}`)
        server._getQuestionsExam(id).then( (questions) => { 
        dispatch(receiveQuestions(questions))
    }
 )
}
     

//EXAMS 
export const getExam = (id) => ({
    type: types.GET_EXAM,
    id
})

const receiveExams = exams => ({
    type: types.RECEIVE_EXAMS,
    exams
})

export const editExam = (exam) =>   ({
    type: types.UPDATE_EXAM,
    exam
})

export const deleteExam = (id) =>   { 
   return {type: types.DELETE_EXAM,
    id
   } 
}

const addExam = (exam) => ({
    type: types.ADD_EXAM,
    exam
})

export const handleDeleteExam = (id) => dispatch => {  
    server._deleteExam(id).then((res) => {  
        console.log(res)
        dispatch(deleteExam(id))
    }
     )
    
}

export const handleAddExam = (exam) => dispatch => { 
    server._addExam(exam).then( (res) => { 
        console.log('examen creado correctamente')
        console.log(res)
        dispatch(addExam(res))
    } )
}

export const handleEditExam = (exam) => dispatch => { 
    server._editExam(exam).then ( (res)=> {
        console.log('examen editado correctamente')
        console.log(res)
        dispatch(editExam(res))
    } )

}

//QUESTIONS
const receiveQuestions = questions => ({
    type: types.RECEIVE_QUESTIONS,
    questions: questions
})

export const editQuestion = (question) =>   ({
    type: types.EDIT_QUESTION,
    question
})

const addQuestion = (question) => ({
    type: types.ADD_QUESTION,
    question
})

export const deleteQuestion = (id) => ({
    type: types.DELETE_QUESTION,
    id
})

const startLoading = () => ({
    type: types.START_LOADING
})

const endLoading = () => ({
    type: types.END_LOADING
})

const getRandomQuestion = (question) => ({
    type: types.RANDOM_QUESTION,
    question
})

export const handleQuestionEdit = question => dispatch => {
    server._editQuestion(question).then( res => { 
        dispatch(editQuestion(res))
    })
}

export const handleAddQuestion = (question) => dispatch => { 
    server._addQuestion(question).then( (res) => {  
        dispatch(addQuestion(res))
    } )
}

export const handleDeleteQuestion = (id) => async dispatch => { 
    dispatch(startLoading())
    await server._deleteQuestion(id).then( (res) => {
        console.log(`llega del server con id ${id} y con el mensaje ${res}`)
        dispatch(endLoading())
        dispatch(deleteQuestion(id)) 

    })
}

export const getNextQuestion = () => dispatch => {
    console.log('vamos a llamar al random question del server')
    server._randomQuestion().then( res => {
        console.log('llega random question del server')
        console.log(res)
        dispatch(getRandomQuestion(res))
    })    
    

}
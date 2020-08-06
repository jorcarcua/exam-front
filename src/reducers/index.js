import exams, * as fromExams from './exams'
import questions from './questions'
import loading from './loading'
import user from './user'
import nextQuestion from './nextQuestion'
import * as types from '../constants/actionTypes'
import { combineReducers } from 'redux'

 
const errorMessage = (state = null, action) => {
    const { type, error} = action

    if(type === types.RESET_ERROR_MESSAGE){
        return null
    } else if (error) {
        return error
    } 
    
    return state
}

const reducer = combineReducers({exams, questions,loading, user, nextQuestion, errorMessage}) 

export default reducer


export const getExamById = (state,id) => { 
    return fromExams.getExamById(state,id)
}

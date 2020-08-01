import exams, * as fromExams from './exams'
import questions from './questions'
import nextQuestion from './nextQuestion'
import * as types from '../constants/actionTypes'
import { combineReducers } from 'redux'


const loading = (state=false,action) => {
    switch (action.type) { 
        case types.START_LOADING:
            return true
        
         case types.END_LOADING:
            return false
        default:
            return state
    }
}

const reducer = combineReducers({exams, questions,loading, nextQuestion}) 

export default reducer


export const getExamById = (state,id) => { 
    return fromExams.getExamById(state,id)
}

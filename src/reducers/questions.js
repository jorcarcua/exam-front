import * as types from '../constants/actionTypes'


const questions = (state = [], action ) => {
    switch(action.type){
        case types.RECEIVE_QUESTIONS:
            return action.questions
        
        case types.EDIT_QUESTION: 
            return state.map( question => question._id!==action.question._id ? question : action.question )
      
        case types.ADD_QUESTION: 
            return [...state, action.question]
        
        case types.DELETE_QUESTION:   
            return state.filter( question => question._id!==action.id)
        default:
            return state
    }
}

export const getQuestionById = (id,state) => { 
    const result =  state.questions.find( question => question._id==id) 
    return result
}

export default questions


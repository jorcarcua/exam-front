import * as types from '../constants/actionTypes'


const questions = (state = [], action ) => {
    switch(action.type){
        case types.RECEIVE_QUESTIONS:
            return action.questions
        
        case types.EDIT_QUESTION:
            return state.map( question => question.id==action.question.id ? action.question : question )
      
        case types.ADD_QUESTION: 
            return [...state, action.question]
        
        case types.DELETE_QUESTION:
            console.log('llega al reducer')
            return state.filter( question => question.id!=action.id)
        default:
            return state
    }
}

export const getQuestionById = (id,state) => { 
    const result =  state.questions.find( question => question.id==id)
    console.log(state.questions)
    console.log(result)
    return result
}

export default questions


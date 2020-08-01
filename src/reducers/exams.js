import * as types from '../constants/actionTypes'
 
 

const exams =  (state = [], action) => { 
    switch(action.type) {  
        case types.ADD_EXAM:
            console.log('info del reducer')
            console.log(action.exam)
            return [...state, action.exam]

        case types.UPDATE_EXAM:
            return state.map((exam)=> exam.id !== action.id ? exam : action.exam)

        case types.DELETE_EXAM: 
            console.log(action.id)
            return state.filter((exam)=>exam.id!==action.id)

        case types.GET_EXAMS:
            return action.exams
        
        case types.RECEIVE_EXAMS:
             return action.exams
        
        default:
            return state
    }
}

export default exams

export const getExamById = (state,id) =>  { 
    return state.exams[id]
}
 
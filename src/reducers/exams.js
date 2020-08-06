import * as types from '../constants/actionTypes'
 
 

const exams =  (state = [], action) => { 
    switch(action.type) {  
        case types.ADD_EXAM:
            return [...state, action.exam]

        case types.EDIT_EXAM:
            return state.map((exam)=> exam._id !== action.exam._id ? exam : action.exam)

        case types.DELETE_EXAM: 
            console.log(action.id)
            return state.filter((exam)=>exam._id!==action.id)

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
    const result =  state.exams.find( exam => exam._id==id) 
    return result
}
 
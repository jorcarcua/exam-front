import * as types from '../constants/actionTypes'

const user = (state=null,action) => {
    switch (action.type) { 
        case types.LOGIN:
            console.log('en el reducer')
            console.log(action)
            return action.user
        
         case types.LOGOUT:
             console.log('entra en reducer logout')
            return null
        default:
            return state
    }
}

export default user
import * as types from '../constants/actionTypes'
import server from  '../utils/api/server' 
import auth from '../utils/auth'

import examActionsBuilder from './exam' 
import questionActionsBuilder from './question'
import commonActionsBuilder from './common'
import userActionsBuilder from './user'
 

const commonActions = commonActionsBuilder({types})

export const examActions = examActionsBuilder({server, types, commonActions})

export const questionActions = questionActionsBuilder({server, types, commonActions}) 

export const userActions = userActionsBuilder({server, types, commonActions, auth}) 
 
 


 
import _exams from './exams.json'
import _nextQuestion from './nextQuestion.json'
import _questions_exam from './questions-exam.json'
import { RECEIVE_EXAMS } from '../../constants/actionTypes'
import NextQuestion from '../../containers/NextQuestion'

const TIMEOUT = 100

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

const _getExams = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(_exams), TIMEOUT)
    })
  
}

const _getNextQuestion = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(_nextQuestion), TIMEOUT)
        })
}

const _getQuestionsExam = (id) => {
    return new Promise((res, rej) => { 
        setTimeout(() => res(_questions_exam), TIMEOUT)
        })
}

const _deleteExam = (id) => {
    return new Promise((res,req) => {
        setTimeout(() => { 
            res(`registro con id  ${id}  borrado correctamente`)
        }, TIMEOUT)
    })
}

const _addExam = (exam) => {
    const newExam = {...exam,id:generateUID()}
    console.log('en el server')
    console.log(newExam)
    return new Promise((res,req) => {
        setTimeout(() => {
            res(newExam)
        }, TIMEOUT)
    })
}

const _editExam = (exam) => {
    return new Promise((res, req) => {
        setTimeout(() => {
            res(exam)
        }, TIMEOUT)
    })
}

const _editQuestion = (question) => {
    return new Promise((res, req) => {
        setTimeout(() => {
            res(question)
        }, TIMEOUT)
    })
}

const _addQuestion = (question) => {
    console.log('llega al server con estos parametrs:')
    console.log(question) 
    return new Promise((res, req) => {
        setTimeout(() => {
            res(question)
        }, TIMEOUT)
    })
}

const _deleteQuestion = (id) => {
    console.log(`message from server: delete question con id ${id}`)

    return new Promise((res,rej) => {
        setTimeout( () => {
           res('Question deleted')
        }, 10000)
    })
}

const _randomQuestion = () => {
    const index = Math.floor(Math.random() * 2);  
    console.log(`el random es ${index}`)
    console.log(_questions_exam[index] )
    return new Promise((res, rej) => {
      //  setTimeout(() => res(_nextQuestion ), TIMEOUT)
      setTimeout(() => res(_questions_exam[index] ), TIMEOUT)
      
        })  
}

export default {
    _getExams,
    _nextQuestion,
    _getQuestionsExam,
    _deleteExam,
    _addExam,
    _editExam,
    _editQuestion,
    _addQuestion,
    _deleteQuestion,
    _randomQuestion
}
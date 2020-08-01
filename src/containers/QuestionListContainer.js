import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getQuestions} from '../actions'
import QuestionDetail from './QuestionDetail'
import QuestionList from '../components/QuestionList'

class QuestionListContainer extends Component {
 

    componentDidMount(){
        const {match, retrieveQuestions, dispatch} = this.props 
      // (PRUEBAS) para comprobar el estado antes de llamar al servicio
        const {questions} = this.props
        console.log('MENSAJE DE PRIUEBA')
        console.log(questions)

      dispatch(getQuestions(match.params.examId))
         

    }

    render(){  
        const {questions, history } = this.props 
       // questions.map( (question) => console.log(question)) 
        
        return (
            <div>
                <QuestionList questions={questions}/> 
                <button class="btn btn-primary" onClick={history.goBack}>Back</button>
              
            </div>
        )
    }
  
    

}

 
const mapStateToProps  = (state ) => ({ 
    questions: state.questions
})

 

export default withRouter(connect(mapStateToProps) (QuestionListContainer))

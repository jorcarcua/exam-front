import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionById } from '../../reducers/questions'
import { questionActions } from '../../actions'
import { withRouter } from 'react-router-dom'

class QuestionEditContainer extends Component {

    state = {
        question: {}
    }

    componentWillMount(){
        const {question} = this.props
        this.setState({question})
    }

    handleQuestionChange = (e) => {
        const newValue = e.target.value
        this.setState(prevState => {
            return { question: { ...prevState.question, text: newValue } }
        })
    }

    handleAnswerChange = (id,e) => { 
       let newValue
       let property
        if(e.target.type == 'textarea'){
            property = 'text'
            newValue = e.target.value
        }
        else{
            property = 'correct'
            newValue = e.target.value == 'on' ? true : false
        }
        this.setState( prevState => { 
            const newAnswers = prevState.question.answers.map(answer => answer._id == id ? { ...answer, [property]: newValue } : (property == 'correct' ? { ...answer, correct: false } : answer))
            return {question: {...prevState.question, answers: newAnswers}}       
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, history} = this.props
        const { handleEditQuestion} = questionActions 
        const newAnswers = this.state.question.answers.map(answer => { return {text: answer.text, correct: answer.correct}})
        const newQuestion = {text: this.state.question.text, answers: newAnswers}
        dispatch(handleEditQuestion(newQuestion, this.state.question._id, history)) 
    }

    render(){ 
        const {question} = this.state  
        const {history, errorMessage} = this.props
        return (
            <div>
                <p style={{ color: 'red' }}>{errorMessage}</p> 
                <h1 class="mb-5">Question Edition</h1>
                <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="col">
                    <label for="text">Text</label>
                     
                    <textarea type="text"  class="form-control" value= {question.text}  onChange={this.handleQuestionChange}/>
                  
                    </div>
                    
                    <div class="col">
                    <label for="answers">Answers</label>
                        {
                           question.answers.map( answer => {
                            return ( 
                                <div class="row">
                                    <div class="col">
                                        <textarea type="text" class="form-control" value={answer.text} onChange={(e) => this.handleAnswerChange(answer._id,e) }/> 
                                    </div>
                                <div class="col">    
                                <label >Correct</label>
                                <input class="form-control" type="radio" 
                                    name="answer"
                                {...(answer.correct==true ? {checked: true} : {} )}
                                    onChange={(e) => this.handleAnswerChange(answer._id,e)}/>
                                </div>
                                </div>    
                            )}
                        )}
                    </div>
                    </div>
                    <button class="btn btn-primary mr-1" type="submit">Save</button>
                    <button class="btn btn-primary" onClick={history.goBack}>Back</button>

                        
                </form> 

 

             </div>    
        )
    }
}  

  
const mapStateToProps = (state, {match}) => ({
    question: getQuestionById(match.params.questionId, state),
    errorMessage: state.errorMessage
})

export default withRouter(connect(mapStateToProps) (QuestionEditContainer))
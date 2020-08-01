import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestionById } from '../reducers/questions'
import { handleQuestionEdit} from '../actions/'
import { withRouter } from 'react-router-dom'

class QuestionEdit extends Component {

    state = {
        question: {}
    }

    componentWillMount(){
        const {question} = this.props
        this.setState({question})
    }

    handleQuestionChange = (e) => {
        const newValue= e.target.value
        console.log(`nuevo valor ${newValue}`)
        console.log()
        this.setState( prevState => {
            console.log('previous state')
            console.log(prevState)
            console.log('nuevo state')
            console.log({question: {...prevState.question, text: newValue  }})
            return {question: {...prevState.question, text: newValue }}
            })
    }

    handleAnswerChange = (id,e) => {
        console.log(`llega a hadnleasnwer con id ${id} y e ${e.target.value}`)
        console.log(e.target.type)

      /*  if(e.target.type=='checbox'){

        }
        else{

        }*/

       //const newValue = e.target.value
       // const property = e.target.type == 'textarea' ? 'text' : 'correct'
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
            console.log(prevState)
            
            const newAnswers = prevState.question.answers.map(answer => answer.id == id ? { ...answer, [property]: newValue } : (property == 'correct' ? { ...answer, correct: false } : answer))
            console.log('vemos el newAnswers')
            console.log(newAnswers)
            return {question: {...prevState.question, answers: newAnswers}}       
        })
    }

    handleSubmit = (e) => {
        const {dispatch, history} = this.props
        e.preventDefault()
        dispatch(handleQuestionEdit(this.state.question))
        history.push(`/questionDetail/${this.state.question.id}`)
    }

    render(){
        const {question} = this.state  
        const {history} = this.props
        return (
            <div  >
                <h1 class="mb-5">Question Edition</h1>
                <form   onSubmit={this.handleSubmit}>

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
                                        <textarea type="text" class="form-control" value={answer.text} onChange={(e) => this.handleAnswerChange(answer.id,e) }/> 
                                    </div>
                                <div class="col">    
                                <label >Correct</label>
                                <input class="form-control" type="radio" 
                                    name="answer"
                                {...(answer.correct==true ? {checked: true} : {} )}
                                    onChange={(e) => this.handleAnswerChange(answer.id,e)}/>
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
    question: getQuestionById(match.params.questionId, state)
})

export default withRouter(connect(mapStateToProps) (QuestionEdit))
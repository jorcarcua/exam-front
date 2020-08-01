import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions'
import { withRouter } from 'react-router-dom'
import AnswersInput from '../components/AnswerInputs'

class NewQuestion extends Component {

    state = {
        question:{
            text:'',   
            answers:[]
        }
    }

   onChange = (e) => {   
       const target = e.target
        let newValue= target.value
        let property= target.name 

        if(!property.startsWith('answer')){
            this.setState((prevState) => {
                return {question:{...prevState.question, [property]: newValue}}
            })
        }
        else{ 
            this.setState((prevState) => { 
                property=property.replace('answer-','')
                console.log(property)
                newValue = property == 'correct' ? (target.value == 'on' ? true : false) : newValue
                let answers = [...this.state.question.answers]
                answers[target.dataset.id][property] = newValue
                return {answers: answers}
            })
        } 
            
    }

    onSubmit = (e) => {
        e.preventDefault()
         
        const { question } = this.state
        const {dispatch, match, history} = this.props
        const examId = match.params.examId 
        
        
        dispatch(handleAddQuestion({...question, examId:examId}))

        

       // history.push(`/listQuestions/${examId}`)
       history.push('/')
       
    }

    addAnswer = (e) => {
        e.preventDefault() 
        this.setState( prevState => { 
            return { question: {...prevState.question, answers: [...prevState.question.answers,{text:'',correct:false}]} }
        })
        
    }

    render () {
        const {question} = this.state
        const {history} = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} onChange={this.onChange}>
                    <label>Title</label>
                    <textarea  
                        value={question.text}
                        placeholder='introduce text'
                        maxLength={280}
                        name="text"
                        value={question.title}
                     />    
                     
                    <div>
                        <label>Add Answer</label>
                        <button onClick={this.addAnswer}>+</button> 
                    </div>
                    
                    <div>
                       <AnswersInput answers={question.answers}/> 
                    </div>
                    <br></br>
                    <div>
                      
                      <button type="submit">Save</button>
                      <button onClick={history.goBack}>Back</button>
                  </div>
                     
                </form>
                

            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))
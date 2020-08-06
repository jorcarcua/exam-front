import React, { Component } from 'react'
import { connect } from 'react-redux'
import { questionActions } from '../../actions'
import { withRouter } from 'react-router-dom'
import  {AnswerInputs} from '../../components'

const {handleAddQuestion} = questionActions

class QuestionCreateContainer extends Component {

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
        
        
        dispatch(handleAddQuestion({...question, exam:examId}, history))
 
       
    }

    addAnswer = (e) => {
        e.preventDefault() 
        this.setState( prevState => { 
            return { question: {...prevState.question, answers: [...prevState.question.answers,{text:'',correct:false}]} }
        })
        
    }

    render () {
        const {question} = this.state
        const {history, errorMessage} = this.props 
        console.log(`errorMessage es ${errorMessage}`)
        return (
           
            <div>
                <p style={{ color: 'red' }}>{errorMessage}</p>
             
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
                       <AnswerInputs answers={question.answers}/> 
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

const mapStateToProps = (state) => ({
    errorMessage: state.errorMessage
})

export default withRouter(connect(mapStateToProps)(QuestionCreateContainer))
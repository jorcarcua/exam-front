import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNextQuestion } from '../actions'
import { Link, Redirect } from 'react-router-dom'

class NextQuestion extends Component { 

     
    componentWillMount() {
        this.setState(this.getInitialState())
    }

   componentDidMount(){ 
     const {dispatch} = this.props
    dispatch(getNextQuestion())
     
   }
  
   checkAnswer = (e) => {
       e.preventDefault() 
       const answers = this.props.question.answers
       let success = false 
       success=answers[this.state.selected].correct  

       if(success){ 
         this.setState({showResult: true, message: 'Congratulations the answer is right'})
       }
       else{ 
         this.setState({showResult: true, message: 'Sorry the answer is incorrect'})
       }
 
   }

   onChange = (id, e) => {  
    this.setState({selected: id})
   }

   getInitialState = () => {
     return {
        selected:'',
        showResult: false,
        message:''
    }
   }

   refreshState  = () => { 
       this.setState(this.getInitialState())
       const {dispatch} = this.props
       dispatch(getNextQuestion())
   }

   render () {   
       const {question} = this.props
       const {showResult} = this.state 
        return (
            <div>
                 <h3>Next Question</h3>
                    <p>{question.text}</p> 
                   
                    <div>
                        <form onSubmit={this.checkAnswer}>
                                
                            {question.answers.map( ( answer, idx) =>   
                                <div>
                                    <input type="radio" name="answer" checked={this.state.selected === idx}  onChange={(e) => this.onChange(idx,e)}/> 
                                    <label  style={answer.correct && this.state.showResult ? {border: '3px solid green'} : {}} >{answer.text}</label>
                                    
                                 </div>
                                 )}
                                 <br/>  

                                {showResult ? (
                                    <div>
                                        <p>{this.state.message}</p> 
                                        <Link to='/nextQuestion' onClick={this.refreshState}>Next Question</Link> 

                                    </div>
                                    ) : (
                                        <button type="submit">Send</button>  
                              
                                )} 
                        </form> 
                    </div>
                       
                   
                </div>   
        )
   }

}

const mapStateToProps = (state) => ({
    question : state.nextQuestion
 })
 

export default connect(mapStateToProps)(NextQuestion)
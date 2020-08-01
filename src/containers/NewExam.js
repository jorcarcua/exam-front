import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddExam} from '../actions'
import { withRouter } from 'react-router-dom'

class NewExam extends Component {

    state = {
        title:''

    }

    handleChange = (e) => { 
        const text=e.target.value

        this.setState(() => ({
            title: text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
         
        const { title } = this.state
        const {dispatch, id, history} = this.props
        const exam = {
            id,
            title
        }
        
        dispatch(handleAddExam(exam))

        this.setState({
             title: ''
        })

        history.push('/')
       
    }

    render () {
        const {title} = this.state
        const {history} = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        onChange={this.handleChange}
                        value={title}
                        placeholder='introduce text'
                        maxLength={280}
                     />    
                    
                    <button type="submit">Save</button>
                    <button onClick={history.goBack}>Back</button>
                </form>
                

            </div>
        )
    }
}

export default withRouter(connect()(NewExam))
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { examActions } from '../../actions'
import { withRouter } from 'react-router-dom'

class  ExamCreateContainer extends Component {

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
        const { handleAddExam } = examActions
        const { title } = this.state
        const { dispatch, id, history } = this.props
        const exam = {
            id,
            title
        }

        dispatch(handleAddExam(exam, history))


    }

    render () { 
        const {title} = this.state
        const {errorMessage, history} = this.props
        return (
            <div>
                 <p style={{ color: 'red' }}>{errorMessage}</p>
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

const mapStateToProps = (state) => ({
    errorMessage: state.errorMessage
})

export default withRouter(connect(mapStateToProps)(ExamCreateContainer))
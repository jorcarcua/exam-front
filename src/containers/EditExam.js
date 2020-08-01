import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { handleEditExam, getExam } from '../actions'
import { getExamById } from '../reducers'
import { connect } from 'react-redux'

class EditComponent extends Component {

    state = {
        exam: ''
    }

    componentDidMount() {
        const { dispatch } = this.props
        const { exam } = this.props
        console.log(this.props)
        console.log(exam)
        this.setState(() => ({ exam }))
    }

    handleSubmit = (e) => {
        const { dispatch, history } = this.props
        e.preventDefault()
        dispatch(handleEditExam(this.state.exam))
        history.push('/')
    }

    handleChange = (e) => {
        const exam = this.state.exam
        exam.title = e.target.value
        this.setState(exam)
    }

    render() {
        const { history } = this.props
        return (
            <form onSubmit={this.handleSubmit} class="text-left">

                <div class="form-group ">
                    <label for="title"  >Title:</label>
                    <textarea class="form-control" onChange={this.handleChange} value={this.state.exam.title} id="title"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                <button onClick={history.goBack} class="btn btn-primary">Back</button>
            </form>
        )
    }
}

const mapStateToProps = (state, { match }) => ({
    exam: getExamById(state, match.params.examId - 1)
})

export default connect(mapStateToProps)(EditComponent)
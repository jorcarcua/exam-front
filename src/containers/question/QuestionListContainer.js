import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { questionActions } from '../../actions'
import {QuestionList} from '../../components'
import {Link} from 'react-router-dom'

class QuestionListContainer extends Component {
 
    componentDidMount(){
        const {getQuestions} = questionActions
        const {match, retrieveQuestions, dispatch} = this.props  
        const {questions} = this.props 

      dispatch(getQuestions(match.params.examId)) 
    }

    render() {
        const { questions, history } = this.props

        return (
            <div>
                <QuestionList questions={questions} />
                <Link class="btn btn-primary" to={'/'}>Back</Link>

            </div>
        )
    }

}
 
const mapStateToProps  = (state ) => ({ 
    questions: state.questions
})

 

export default withRouter(connect(mapStateToProps) (QuestionListContainer))

import { connect } from "react-redux"
import React, { Component }  from 'react'
import {ExamList}  from '../../components'
import {examActions} from '../../actions'

 
const { editExam, handleDeleteExam, getExams } = examActions

class ExamListContainer extends Component {

    componentDidMount(){
        const {getExams} = this.props 
        getExams() 
        
    }

    render() {
        const { exams, handleDeleteExam} = this.props
        return(
            <ExamList
            exams = {exams}
            onEdit = { () => editExam()  }
            onDelete = {handleDeleteExam}
        /> 
        )
    }

} 
     

const mapStateToProps = (state) => ({
    exams: state.exams
})



export default connect(mapStateToProps,{handleDeleteExam, getExams})(ExamListContainer)
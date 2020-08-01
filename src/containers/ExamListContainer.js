import { connect } from "react-redux"

import React from 'react'
import  ExamList  from '../components/ExamList'
import { editExam, handleDeleteExam} from '../actions'
import {Link} from 'react-router-dom'
 


const ExamListContainer = ({ exams, handleDeleteExam}) => ( 
    
    <ExamList
        exams = {exams}
        onEdit = { () => editExam()  }
        onDelete = {handleDeleteExam}
    /> 
)



const mapStateToProps = (state) => ({
    exams: state.exams
})



export default connect(mapStateToProps,{handleDeleteExam})(ExamListContainer)
import React from 'react'
import { Link } from 'react-router-dom'

const ExamDetail = ({ exam, onDelete, onEdit }) => (
  
    <tr>
        <td>{exam.title}</td>
        <td>{exam.numberQuestions}</td>
        <td> <Link to={`/listQuestions/${exam.id}`} >Question List</Link> </td>
        <td> <Link to={`/editExam/${exam.id}`} >Edit Exam</Link>  </td>
        <td> <Link onClick={onDelete}>Eliminar</Link></td>
        <td> <Link to={`/addQuestion/${exam.id}`}>Add Question</Link>  </td>
    </tr>
 
)

export default ExamDetail
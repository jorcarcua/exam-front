import React from 'react'
import { Link } from 'react-router-dom'

const ExamDetail = ({ exam, onDelete, onEdit }) => (
  
    <tr>
        <td>{exam.title}</td>
        <td>{exam.numberQuestions}</td>
        <td> <Link to={`/questionList/${exam._id}`} >Question List</Link> </td>
        <td> <Link to={`/examEdit/${exam._id}`} >Edit Exam</Link>  </td>
        <td> <Link onClick={onDelete}>Eliminar</Link></td>
        <td> <Link to={`/questionCreate/${exam._id}`}>Add Question</Link>  </td>
        <td> <Link to={`/questionNext/${exam._id}`}>Start Exam</Link>  </td>
    </tr>
 
)

export default ExamDetail
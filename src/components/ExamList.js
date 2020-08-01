import ExamDetail from './ExamDetail'
import React from 'react'


const ExamList = ({ exams, onEdit, onDelete }) => (
   <div>
   <h1>Exam List</h1>
    <p class="lead"> These are all the exams you have access to   </p>

     

   <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Number Questions</th>
        <th>List Questions</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>Add Question</th>
      </tr>
    </thead>
    <tbody>
    { 
   exams.map( exam =>  
       
       <ExamDetail 
       exam = {exam}
       onEdit = {onEdit}
       onDelete = {() => onDelete(exam.id)}
       key = {exam.id}
       />
      
      
   )}
    </tbody>
  </table>
         
   </div>
)

export default ExamList
import React from 'react';
import './App.css';
import ExamListContainer from './containers/ExamListContainer'
import NewExam from './containers/NewExam'
import EditExam from './containers/EditExam'
import NewQuestion from './containers/NewQuestion'
import NextQuestion from './containers/NextQuestion'
import QuestionListContainer from './containers/QuestionListContainer'
import QuestionDetail from './containers/QuestionDetail'
import QuestionEdit from './containers/QuestionEdit'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { editExam } from './actions';
import Header from './components/Header'
 

const App = () => (  
 <Router>

    <Header/>

<main role="main" class="container">

  <div class="starter-template">
   
        <Route path='/' exact component={ExamListContainer} />
        <Route path='/newExam'
          render={({ history }) => (
            <NewExam history={history} />
          )
          }
        />
        <Route path='/editExam/:examId' component={EditExam} />
        <Route path='/listQuestions/:examId' component={QuestionListContainer} />
        <Route path='/questionDetail/:questionId' component={QuestionDetail} />
        <Route path='/questionEdit/:questionId' component={QuestionEdit} />
        <Route path='/addQuestion/:examId' component={NewQuestion} />
        <Route path='/nextQuestion/' component={NextQuestion} /> 


  </div>

</main> 
</Router>
)

     
    
export default App

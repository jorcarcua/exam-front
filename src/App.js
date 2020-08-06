import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css' 
import {
  ExamListContainer, ExamCreateContainer, ExamEditContainer, QuestionCreateContainer,
  QuestionNextContainer, QuestionListContainer, QuestionDetailContainer, QuestionEditContainer, 
  LoginContainer, HeaderContainer, HomeContainer
} from './containers' 
import { Logout } from './components'


const App = () => (
  <Router> 
    <HeaderContainer /> 
      <main role="main" class="container"> 
        <div class="starter-template"> 
          <Route path='/' exact component={HomeContainer} />
          <Route path='/examList' exact component={ExamListContainer} />
          <Route path='/examCreate' component={ExamCreateContainer} /> 
          <Route path='/examEdit/:examId' component={ExamEditContainer} />
          <Route path='/questionList/:examId' component={QuestionListContainer} />
          <Route path='/questionDetail/:questionId' component={QuestionDetailContainer} />
          <Route path='/questionEdit/:questionId' component={QuestionEditContainer} />
          <Route path='/questionCreate/:examId' component={QuestionCreateContainer} />
          <Route path='/questionNext/:examId' component={QuestionNextContainer} /> 
          <Route path='/login'  component={LoginContainer} /> 
          <Route path='/logout'  component={Logout} /> 
        </div> 
      </main>
  </Router>
)
 
export default App

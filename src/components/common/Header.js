import React from 'react'
import {Link} from 'react-router-dom'

const Header = ( {user, onLogout}) => (

     <div>  
     <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"> 
      <Link class="navbar-brand" to={'/'}>Exam App</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      {user ?
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
       
          <li class="nav-item active">
            <Link class="nav-link" to={'/'}>Exam List</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={'/examCreate'}>Create Exam</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">

               <Link class="dropdown-item" onClick={onLogout} to={'/Logout'}>Logout</Link>
             
              <a class="dropdown-item" href="#">View your profile</a> 
            </div>
          </li>
           
          
        </ul>
     
      </div>
      :
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
     
         
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Start here</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">

             <Link class="dropdown-item"  to={'/Login'}>Login</Link>
             <Link class="dropdown-item"   >Register</Link>
           
          </div>
        </li>
         
        
      </ul>
   
    </div>
  }


    </nav> 
  </div>
)
  

export default Header
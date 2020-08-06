import React  from 'react'
import { connect } from 'react-redux' 
import { ExamListContainer } from '../../containers'
import { Public } from '../../components'
 

const HomeContainer = ({user}) =>  ( 
    <div>
        {user ?  
                <ExamListContainer/> 
                : 
                <Public/> 
        }
    </div> 
)
 
   
const mapStateToProps = (state) => ({ 
  user: state.user
})

export default connect(mapStateToProps)(HomeContainer)
 
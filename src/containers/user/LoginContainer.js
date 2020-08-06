import React, { Component } from 'react'
import { connect } from 'react-redux'
import {userActions} from '../../actions'
import { withRouter } from 'react-router-dom'

class LoginContainer extends Component {
    state = {
       user: {
           username: '',
           password: ''
       }
    }

    handleChange = (e) => {
        const value = e.target.value
        const property = e.target.name

        this.setState((prevState) => { 
            return {user: {...prevState.user, [property]: value}}
        })
 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {authenticate} = userActions
        const {dispatch, history} = this.props 
        dispatch(authenticate(this.state.user, history))
    } 

    render () {

        const {user} = this.state
        const {errorMessage} = this.props
 
        return(
            <div>
                <p style={{ color: 'red' }}>{errorMessage}</p> 
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" onChange = {this.handleChange} value={user.username}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange = {this.handleChange} value={user.password}/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    errorMessage: state.errorMessage
})

export default withRouter(connect(mapStateToProps)(LoginContainer))
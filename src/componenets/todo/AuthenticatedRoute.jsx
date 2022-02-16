import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
 
export default class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.IsUserLoggedIn()) {
            return {...this.props.children}
            //return <Route {...this.props} /> //REACT-5
        } else {
            return <Navigate to="/login" /> 
            //return <Redirect to="/login" /> //REACT-5
        }
    }
}
 

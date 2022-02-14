import react, { Component } from "react";
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';

export default class HeaderComponenet extends Component {

  constructor(props) {
    super(props);

  //  this.Loggedout = AuthenticationService.Loggedout.bind(AuthenticationService);


  }
 

    render() {
      return (
        <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">Google</a></div>
                    <ul className="navbar-nav">
                         <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                       <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                         <li><Link className="nav-link" to="/login">Login</Link></li>
                         <li><Link className="nav-link" to="/logout"onClick={AuthenticationService.Logout}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
      );
    }
  }
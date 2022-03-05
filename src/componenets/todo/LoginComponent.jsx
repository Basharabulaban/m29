import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "basharusr",
      password: "basharpw",
      hasLoginFailed: false,
      showSucesfulMessage: false,
    };
    this.loginClicked = this.loginClicked.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  loginClicked() {

    // call method and verify the sending user name and password is ok or not
    
    if (
      this.state.username === "basharusr" &&
      this.state.password === "basharpw"
    ) 
    
    {
      console.log("sucessfully");
      AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password);
      
     this.props.navigate(`/welcome/${this.state.username}`);

      //   this.setState({ showSucesfulMessage: true });
      //   this.setState({ hasLoginFailed: false });
    } else {
      console.log("failed");
      this.setState({ showSucesfulMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    console.log(this.state);
  }
  render() {
    return (
    //   <div>
    //     <ShowLoginSucessMessage
    //       showSucesfulMessage={this.state.showSucesfulMessage}
    //     />
    //     {/* {this.state.showSucesfulMessage   &&  <div>Login Sucessful</div> } */}
    //     {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
    //     {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
    //     User Name:
    //     <input
    //       type="text"
    //       name="username"
    //       value={this.state.username}
    //       onChange={this.handleChanges}
    //     />
    //     Password:
    //     <input
    //       type="password"
    //       name="password"
    //       value={this.state.password}
    //       onChange={this.handleChanges}
    //     />
    //     <button onClick={this.loginClicked}>Login</button>
    //   </div>

    <div>
    <h1>Login</h1>
    <div className="container">
        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
        {this.state.showSucesfulMessage && <div>Login Sucessful</div>}
        {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
    </div>
</div>
    );
  }
}

function ShowLoginSucessMessage(props) {
  if (props.showSucesfulMessage) {
    return <div>Login Sucessful</div>;
  }
  return null;
}

// function ShowInvalidCredentials(props){
// if (props.hasLoginFailed) {
//    return <div>Invalid Credentials</div>
// }
// return null

// }

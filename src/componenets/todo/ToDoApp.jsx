import react, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import withNavigation from './WithNavigation.jsx'   

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome" element={<WelcomeComponent />} />
                        <Route path="/*"  element={<ErrorComponenet />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome you</div>;
  }
}

function ErrorComponenet(){
    return <div>An Error occured , contact supoport</div>
}
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "basharusr",
      password: "basharpw",
      hasLoginFailed: false,
      showSucesfulMessage: false,
    };
    this.loginClicked = this.loginClicked.bind(this);

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  loginClicked() {
    if (
      this.state.username === "basharusr" &&
      this.state.password === "basharpw"
    ) {
      console.log("sucessfully");
      this.props.navigate(`/welcome`)
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
      <div>
        <ShowLoginSucessMessage
          showSucesfulMessage={this.state.showSucesfulMessage}
        />
        {/* {this.state.showSucesfulMessage   &&  <div>Login Sucessful</div> } */}
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        User Name:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChanges}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChanges}
        />
        <button onClick={this.loginClicked}>Login</button>
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
export default TodoApp;

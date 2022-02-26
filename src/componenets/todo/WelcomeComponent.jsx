import React, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WelcomeMessage: "",
      WelcomebeenMessage: "",
      WelcomevariableMessage: "",
    };
    this.handleSucessResponse = this.handleSucessResponse.bind(this);
    this.handleError = this.handleError.bind(this);

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handlebeenSucessResponse = this.handlebeenSucessResponse.bind(this);
    this.handlehelloworldpathvariableSucessResponse =
      this.handlehelloworldpathvariableSucessResponse.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome You {this.props.params.name} . You can manage your Todos{" "}
          <a href="/todos"> Here </a>{" "}
        </div>
        <div className="container">
          click here to get customize welcome message {this.props.params.name} .
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome Message
          </button>
          You can manage your Todos <a href="/todos"> Here </a>{" "}
        </div>

        <div className="container">{this.state.WelcomeMessage}</div>
        <div className="container">{this.state.WelcomebeenMessage}</div>
        <div className="container">{this.state.WelcomevariableMessage}</div>
      </div>
    );
  }
  retrieveWelcomeMessage() {
    console.log("click message welcome button");
    HelloWorldService.executeHelloWorldService().then((response) => {
      this.handleSucessResponse(response);
      console.log(response);
    });
    HelloWorldService.executeHelloWorldbeanService().then((response) => {
      this.handlebeenSucessResponse(response);
      console.log(response);
    });
    HelloWorldService.executehelloworldpathvariable(this.props.params.name)
    .then(response => {this.handlehelloworldpathvariableSucessResponse(response); console.log(response);})
    .catch (error => this.handleError(error))
      
  }

  handleSucessResponse(response) {
    this.setState({ WelcomeMessage: response.data });
  }
  handleError(error) {
    console.log(error.response);
     this.setState({ WelcomevariableMessage: error.response.data.message });
  }

  handlebeenSucessResponse(response) {
    this.setState({ WelcomebeenMessage: response.data.message });
  }

  handlehelloworldpathvariableSucessResponse(response) {
    this.setState({ WelcomevariableMessage: response.data.message });
  }
}

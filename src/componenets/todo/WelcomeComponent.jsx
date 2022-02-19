import react, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";
export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WelcomeMessage: "",
    };
    this.handleSucessResponse = this.handleSucessResponse.bind(this);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
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
      </div>
    );
  }
  retrieveWelcomeMessage() {
    console.log("click message welcome button");
    HelloWorldService.executeHelloWorldService().then((response) => {
      this.handleSucessResponse(response);
      console.log(response);
    });

    //  .catch()
  }

  handleSucessResponse(response) {
    this.setState({ WelcomeMessage: response.data });
  }
}

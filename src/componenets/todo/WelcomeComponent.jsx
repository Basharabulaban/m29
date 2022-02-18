import react, { Component } from "react";
export default class WelcomeComponent extends Component {
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
      </div>
    );
  }
   retrieveWelcomeMessage() {
    console.log("click message welcome button") 
  } 
}

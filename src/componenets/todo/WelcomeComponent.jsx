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
</div>

      );
    }
  }
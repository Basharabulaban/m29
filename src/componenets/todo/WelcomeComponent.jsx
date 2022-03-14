import React, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";
import { Link } from 'react-router-dom'
import AuthenticationService from "./AuthenticationService.js";
export default class WelcomeComponent extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     WelcomeMessage: "",
                     WelcomebeenMessage: "",
                     WelcomevariableMessage: "",
                   };
                   this.handleSucessResponse = this.handleSucessResponse.bind(
                     this
                   );
                   this.handleError = this.handleError.bind(this);

                   this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(
                     this
                   );
                   this.handlebeenSucessResponse = this.handlebeenSucessResponse.bind(
                     this
                   );
                   this.handlehelloworldpathvariableSucessResponse = this.handlehelloworldpathvariableSucessResponse.bind(
                     this
                   );
                   this.refreshYourToken = this.refreshYourToken.bind(this);
                 }
                 render() {
                   return (
                     <div>
                       <h1>Welcome!</h1>
                       <div className="container">
                         Welcome You {this.props.params.name} . You can manage
                         your Todos{" "}
                         <Link className="nav-link" to="/todos">
                           Todos
                         </Link>{" "}
                       </div>
                       <div className="container">
                         click here to get customize welcome message{" "}
                         {this.props.params.name} .
                         <button
                           onClick={this.retrieveWelcomeMessage}
                           className="btn btn-success"
                         >
                           Get Welcome Message
                         </button>
                         You can manage your Todos <a href="/todos"> Here </a>{" "}
                         <br />
                         <br />
                         also from here you can refresh your token{" "}
                         <button
                           onClick={this.refreshYourToken}
                           className="btn btn-success"
                         >
                           {" "}
                           refresh Your Token
                         </button>
                       </div>

                       <div className="container">
                         {this.state.WelcomeMessage}
                       </div>
                       <div className="container">
                         {this.state.WelcomebeenMessage}
                       </div>
                       <div className="container">
                         {this.state.WelcomevariableMessage}
                       </div>
                     </div>
                   );
                 }
                 refreshYourToken() {
                   AuthenticationService.RefreashJWTAuthenticationService(
                     this.state.token
                   )
                     .then((response) => {
                       console.log("bashar check here is token sucessfully");
                       console.log(response.data);
                      //  AuthenticationService.registerSucessfulLoginforJWT(
                      //    this.state.username,
                      //    response.data.token
                      //  );
                    //   this.props.navigate(`/welcome/${this.state.username}`);
                     })
                     .catch(() => {
                       console.log("failed");
                       this.setState({ showSucesfulMessage: false });
                       this.setState({ hasLoginFailed: true });
                     });
                 }

                 retrieveWelcomeMessage() {
                   console.log("click message welcome button");
                   HelloWorldService.executeHelloWorldService().then(
                     (response) => {
                       this.handleSucessResponse(response);
                       console.log(response);
                     }
                   );
                   HelloWorldService.executeHelloWorldbeanService().then(
                     (response) => {
                       this.handlebeenSucessResponse(response);
                       console.log(response);
                     }
                   );
                   HelloWorldService.executehelloworldpathvariable(
                     this.props.params.name
                   )
                     .then((response) => {
                       this.handlehelloworldpathvariableSucessResponse(
                         response
                       );
                       console.log(response);
                     })
                     .catch((error) => this.handleError(error));
                 }

                 handleSucessResponse(response) {
                   this.setState({ WelcomeMessage: response.data });
                 }
                 handleError(error) {
                   // sometimes you do not get error back when error occured

                   let errorMessage = "";
                   if (error.message) {
                     errorMessage += error.message;

                     if (error.response && error.response.data)
                       errorMessage += error.response.data.message;
                   }
                   this.setState({ WelcomevariableMessage: errorMessage });
                 }

                 handlebeenSucessResponse(response) {
                   this.setState({ WelcomebeenMessage: response.data.message });
                 }

                 handlehelloworldpathvariableSucessResponse(response) {
                   this.setState({
                     WelcomevariableMessage: response.data.message,
                   });
                 }
               }

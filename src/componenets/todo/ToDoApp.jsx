import react, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import withParams from "./withParams";
import withNavigation from "./WithNavigation.jsx";
import { useParams } from "react-router-dom";
import HeaderComponenet from './HeaderComponenet';
import FotterComponenet from './FotterComponenet';
class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    return (
      <div className="TodoApp">
        <Router>
        <HeaderComponenet />
          <Routes>
         
      
              <Route path="/" element={<LoginComponentWithNavigation />} />
              <Route path="/login" element={<LoginComponentWithNavigation />} />
              <Route
                path="/welcome/:name"
                element={<WelcomeComponentWithParams />}
              />
              <Route path="/Todos" element={<ListTodoCompnent />} />
              <Route path="/*" element={<ErrorComponenet />} />
          
          
          </Routes>
            <FotterComponenet />
        </Router>
      </div>
    );
  }
}
class ListTodoCompnent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "learn react",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "learn Java",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "learn Microservise",
          done: false,
          targetDate: new Date(),
        },
        { id: 4, description: "learn OS", done: false, targetDate: new Date() },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1> List To Do </h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Completd?</th>
            </tr>
          </thead>
          <tbody>
            {/* we need to map each todo to its JSX 
            
      var todos=[
        { id: 1, description: "learn react" },
        { id: 2, description: "learn Java" },
        { id: 3, description: "learn Microservise" },
        { id: 4, description: "learn OS" }
      ]

console.log(todo)

todos.forEach(todo=>console.log(todo.description))
todos.map (todo=>todo.description)
todos.map (todo=>todo.id)
            
            */}

            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome you {this.props.params.name} . Tou can manage your Todos{" "}
        <a href="/todos"> Here </a>{" "}
      </div>
    );
  }
}

function ErrorComponenet() {
  return <div>An Error occured , contact supoport</div>;
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

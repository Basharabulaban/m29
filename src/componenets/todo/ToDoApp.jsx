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
import LogoutComponenet from './LogoutComponenet';
import LoginComponent from './LoginComponent';

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
              <Route path="/Logout" element={<LogoutComponenet />} />
              
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




export default TodoApp;

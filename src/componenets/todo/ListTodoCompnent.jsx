import react, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

export default class ListTodoCompnent extends Component {
  constructor(props) {
    // initialize commponenet
    super(props);
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   description: "learn react",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 2,
        //   description: "learn Java",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 3,
        //   description: "learn Microservise",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // { id: 4, description: "learn OS", done: false, targetDate: new Date() },
      ],
    };
  }
  componentDidMount() {
    // once the data is apear
    TodoDataService.RetrieveAllTodos(
      AuthenticationService.getLoggedInUsersName()
    ).then((response) => {
      this.handleSucessResponse(response);
      // this.setState({ todos: response.data });
      console.log(response);
    });
    // .catch (error => this.handleError(error))
  }
  handleError(error) {
    console.log(error.response);
    this.setState({ todos: error.response.data.message });
  }

  handleSucessResponse(response) {
    this.setState({ todos: response.data });
  }

  //loaded for the first time and show on the brouser
  render() {
    // whenver state has changes // render
    return (
      <div>
        <h1> List To Do </h1>
        <div className="container">
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
      </div>
    );
  }
}

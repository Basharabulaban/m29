import react, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import axios from "axios";
export default class ListTodoCompnent extends Component {
  constructor(props) {
    // life cyle method
    console.log("constructor");
    // initialize commponenet
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);

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

  deleteTodo(username, id) {
    // console.log("delete");
    // console.log(username)
    // console.log(id)
    // return axios.delete(`http://localhost:8083/${username}/todos/${id}`);
TodoDataService.DeleteTodoService(username,id);
//   DeleteTodoService(username, id)
  }
  shouldComponentUpdate(nextProps, NextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(NextState);
    return true; // if it is false in this case , componenet list of data will not be return because the componenet wiull npot be update
    //  console.log(this.state);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this.state);
  }
  componentDidMount() {
    console.log("componentDidMount");
    let username = AuthenticationService.getLoggedInUsersName();
    console.log(username);
    // once the data is apear
    TodoDataService.RetrieveAllTodos(username).then((response) => {
      this.setState({ todos: response.data });
    });
    console.log(this.state); ////////////////// bring empty use thread wait in java
    // this.setState({ todos: response.data });
    ///////////  console.log(response);

    // .catch (error => this.handleError(error))
  }
  handleError(error) {
    //////////////  console.log(error.response);
    this.setState({ todos: error.response.data.message });
  }

  handleSucessResponse(response) {
    this.setState({ todos: response.data });
  }

  //loaded for the first time and show on the brouser
  render() {
    console.log("render");
    console.log(this.state); ////////////////// bring empty use thread wait in java
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
                <th>Delete?</th>
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

                  <td>{todo.description}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>{todo.done.toString()}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={()=> this.deleteTodo(todo.username ,todo.id)}
                    >
                      Delete

                    </button>


                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    console.log(this.state); ////////////////// bring empty use thread wait in java
  }
}

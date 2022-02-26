import react, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

import { Navigate } from 'react-router-dom'

export default class ListTodoCompnent extends Component {
  constructor(props) {

    super(props);
    this.state = {
      //id: this.props.params.id,
      todos: [],
      message: null,
    };
    
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
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
  refreshmentTodo() {
    console.log("refreshmentTodo");
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

  deleteTodo(username, id) {
    console.log(username + " " + id);
    // let username = AuthenticationService.getLoggedInUsersName();
    console.log("delete");
    console.log(username + " " + id);

    // return axios.delete(`http://localhost:8083/${username}/todos/${id}`);
    TodoDataService.DeleteTodoService(username, id).then((response) => {
      this.setState({ message: `Delete of Todo  ${id} is sucessful` });
      this.refreshmentTodo();
    });

    //   DeleteTodoService(username, id)
  }

  updateTodo(id) {
   this.props.navigate(`/todos/${id}`)

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
        <div className="alert alert-success">{this.state.message}</div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completd?</th>
                <th>Update?</th>
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
                      className="btn btn-success"

                      
                    onClick={() => this.updateTodo(todo.username, todo.id)}
                   //  onClick={() => Navigate(`/todos/${todo.id}`)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodo(todo.username, todo.id)}
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

import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import TodoDataService from "../../api/todo/TodoDataService.js";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      description: "Learn Forms Now",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };
    this.onSubmitfunction = this.onSubmitfunction.bind(this);
    this.onValidatefunction = this.onValidatefunction.bind(this);
  }
  componentDidMount() {
    console.log("updateTodo");
    let username = AuthenticationService.getLoggedInUsersName();
    console.log(username);
    // once the data is apear
    if (this.props.params.id <=0 ) {
      this.setState({
        description: ""
       
        // why still see the initialization todo object , because we need to put formik properties enableReinitializae
      });
    }else if (this.props.params.id >0 ) {
       ////////////////
    TodoDataService.RetrieveSpecficTodos(username, this.props.params.id).then(
      (response) => {
        console.log(response.data);
        this.setState({
          description: response.data.description,
          targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),

          // why still see the initialization todo object , because we need to put formik properties enableReinitializae
        });
        //  this.setState({ todos: response.data });
      }
    );
////////////////////
    }
   


  }
  render() {
    // desctructureing
    // let arraytest={a:1,b:2,c:3}
    // let {a,b,c}=arraytest

    // a
    // 1
    // b
    // 2
    // c
    // 3
    // let description = this.state.description
    // let targetDate = this.state.targetDate
    // or use bellow

    let { description, targetDate } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            // first bracked for java script and secound one for object

            // let name = "Bashar"
            //
            // let training = "react"

            // let details1= {name:name,training:training}

            // details1
            // {name: 'Bashar', training: 'react'}
            // let details2={name,training}

            // details2
            // {name: 'Bashar', training: 'react'}
            //////

            // the key and value is the same name
            initialValues={{ description, targetDate }}
            onSubmit={this.onSubmitfunction}
            validateOnBlur={false}
            validateOnChange={false}
            validate={this.onValidatefunction}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alart-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <button className="btn btn-sucess" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>

          <h1>You are update {this.props.params.id} </h1>
        </div>
      </div>
    );
  }

  onSubmitfunction(values) {
    console.log(values);

    let username = AuthenticationService.getLoggedInUsersName();
    // this.state.username
    if (this.state.id <=0  ) {
    
      TodoDataService.AddTodos(username, {
        id: this.state.id,
        description: values.description,
        targetDate: values.targetDate,
      }).then(() => {
        this.props.navigate(`/todos`);
      });

    }else if (this.state.id >0 ) {
      TodoDataService.UpdateTodos(username, this.state.id, {
        id: this.state.id,
        description: values.description,
        targetDate: values.targetDate,
      }).then(() => {
        this.props.navigate(`/todos`);
        //this.setState({ message: `update of Todo { this.state.id}  is sucessful` });
        console.log("update of Todo ${ this.state.id}  is sucessful");
        // TodoDataService.RetrieveAllTodos(this.state.username).then((response) => {
        //   this.setState({ todos: response.data });
        // });
      });
    }

    
  }
  onValidatefunction(values) {
    let error = {};
    //  let error={description:" should have at least "}
    if (!values.description) {
      error.description = "Enter description";
    } else if (values.description.length < 5) {
      error.description = "Enter at least 5 characters in description";
    }
    if (!moment(values.targetDate).isValid) {
      error.targetDate = "Enter valid date";
    }
    console.log(values);
    console.log(error);
    return error;
  }
}

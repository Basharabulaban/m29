import React, { Component } from "react";

import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      description: "Learn Forms",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };
  }

  render() {
    // let description=this.state.description
    // let targetDate= this.state.targetDate
    // or use bellow    
    
    let {description,targetDate} = this.state
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik 
          // first bracked for java script and secound one for object  
          initialValues={{
            description,
            targetDate

          }}   
          >
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-control" type="text" name="description" />
                </fieldset>

                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field className="form-control" type="date" name="targetDate" />
                </fieldset>
                <button className="btn btn-sucess">Save</button>
              </Form>
            )
            }
          </Formik>

          <h1>You are update {this.props.params.id} </h1>
        </div>
      </div>
    );
  }
}

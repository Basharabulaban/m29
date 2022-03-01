import React, { Component } from "react";

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
            initialValues={{
              description,
              targetDate,
            }}
            onSubmit={this.onSubmitfunction}
            validate={this.onValidatefunction}
          >
            {(props) => (
              <Form>
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
  }
  onValidatefunction(values) {
    console.log(values);
  }
}

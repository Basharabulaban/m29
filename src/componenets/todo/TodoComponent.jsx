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
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik>
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>description</label>
                  <Field className="form-control" type="text" name="description" />
                </fieldset>
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

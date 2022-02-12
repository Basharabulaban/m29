import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0, // total count
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="App">
        <CounterButton
          by={2}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={15}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={20}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        <span className="count">{this.state.counter}</span>

        <div>
          {" "}
          <button className="reset" onClick={this.reset}>
            Reset
          </button>{" "}
        </div>
      </div>
    );
  }
  reset() {
    this.setState( { counter: 0 });
  }
  increment(by) {
    console.log(`increment from child ${by}`);

    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }
  decrement(by) {
    console.log(`decrement from child ${by}`);

    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }
}

class CounterButton extends Component {
  // define the initial state in a constructor
  //state => counter 0
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="Counter">
        <button onClick={this.increment}> + {this.props.by}</button>

        <button onClick={this.decrement}> - {this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  increment() {
    console.log("increment from parent");

    this.setState((prevState) => {
      return { counter: prevState.counter + this.props.by };
    });

    this.props.incrementMethod(this.props.by);
  }

  decrement() {
    console.log("decrement from parent");

    this.setState((prevState) => {
      return { counter: prevState.counter - this.props.by };
    });

    this.props.decrementMethod(this.props.by);
  }
  reset() {
    this.setState( { counter: 0 });
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./componenets/learning-examples/FirstComponenet.jsx"
import ThirdComponent from "./componenets/learning-examples/ThirdComponent.jsx"
import SecoundComponent from "./componenets/learning-examples/SecoundComponent.jsx"
import Counter from "./componenets/counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <Counter />
      
      </div>
    );
  }
}

class LearningComponents extends Component{
    render() {
        return (
          <div className="LearningComponents">
            <div>My Hello World</div>
            <FirstComponent></FirstComponent>
            <SecoundComponent></SecoundComponent>
            <ThirdComponent></ThirdComponent>
          </div>
        );
      }
}

export default App;

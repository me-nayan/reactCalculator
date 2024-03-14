import React from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";
import calculate from "../src/logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} operation={this.state.operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    operation: PropTypes.string
  };

  render() {
    return (
      <div className="component-display">
        <div className="operator">{this.props.operation}</div>
        <div className="operand">{this.props.value}</div>
      </div>
    );
  }
}

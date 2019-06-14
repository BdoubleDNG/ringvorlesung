import React, { Component } from "react";
import "../css/listElement.css";
class ListElement extends Component {
  state = {};
  static defaultProps = {
    classes: "",
    handleOnClick: () => {}
  };
  render() {
    return (
      <li
        onClick={() => this.props.handleOnClick(this.props.id)}
        className={this.props.classes}
      >
        {this.props.children}
      </li>
    );
  }
}

export default ListElement;

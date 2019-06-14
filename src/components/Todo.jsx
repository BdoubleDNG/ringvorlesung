import React, { Component } from "react";
import "../css/todo.css";

class Todo extends Component {
  state = {};
  render() {
    return <ul className="todo">{this.props.children}</ul>;
  }
}

export default Todo;

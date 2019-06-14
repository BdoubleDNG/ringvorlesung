import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Todo from "./components/Todo.jsx";
import "./App.css";
import ListElement from "./components/ListElement.jsx";
class App extends Component {
  state = {
    todo: [
      { id: 0, value: "Protokoll", done: true },
      { id: 1, value: "Click Me", done: false },
      { id: 3, value: "Click x to delete", done: false },
      { id: 4, value: "Add Todo", done: false }
    ],
    value: ""
  };
  render() {
    return (
      <div className="app">
        <Header
          title={"Todo: " + this.state.todo.filter(el => !el.done).length}
        />
        <Todo>
          {this.state.todo.map(el => {
            let classes = el.done ? "done" : "";
            return (
              <ListElement
                handleOnClick={this.handleOnClick}
                classes={classes}
                key={el.id}
                id={el.id}
              >
                <button id={el.id} onClick={this.onDelete.bind(this)}>
                  x
                </button>
                {el.value}
              </ListElement>
            );
          })}
          <ListElement>
            <input
              type="Text"
              value={this.state.value}
              onChange={this.handleOnChange}
              onKeyDown={this.handleOnKeyDown}
            />
          </ListElement>
        </Todo>
      </div>
    );
  }
  onDelete = e => {
    e.stopPropagation();
    let id = parseInt(e.target.id);
    console.log(id);

    let elements = this.state.todo;
    this.setState({ todo: elements.filter(el => el.id !== id) });
  };
  handleOnClick = id => {
    console.log("click");

    let elements = this.state.todo;
    let index = elements.findIndex(el => el.id === id);
    elements[index].done = !elements[index].done;
    this.setState({ todo: elements });
  };
  handleOnChange = event => {
    this.setState({ value: event.target.value });
  };
  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      let elements = this.state.todo;
      elements.push({
        id: elements.length,
        value: this.state.value,
        done: false
      });
      this.setState({ todo: elements, value: "" });
    }
  };
}

export default App;

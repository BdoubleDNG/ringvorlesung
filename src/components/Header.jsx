import React, { Component } from "react";
class Header extends Component {
  state = {};
  static defaultProps = {
    title: "Title"
  };
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        {this.props.children && (
          <div className="children">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default Header;

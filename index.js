import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <p>Watch as your code updates the screen automatically while this is running on StackBlitz.</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

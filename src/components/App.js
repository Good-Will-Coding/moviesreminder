import React, { Component } from "react";
import AddMovie from "./AddMovie";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container center aligned">
        <div className="title"><h1>Movies to Watch Reminder</h1></div>
        <AddMovie />
      </div>
    );
  }
}

export default App;

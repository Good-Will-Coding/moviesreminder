import React, { Component } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container center aligned">
          <div className="title">
            <h1>Movies to Watch Reminder</h1>
          </div>
          <AddMovie />

          <div className="ui divided items">
            <MovieList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

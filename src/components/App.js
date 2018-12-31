import React, { Component } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Title from "./Title";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container center aligned">
          <Title />
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

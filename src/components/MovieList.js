import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieList.css";

class MovieList extends Component {
  renderMovies() {
    const { movies } = this.props;
    return (
      <div className="container">
          <ul className="ui list selection list ">
            {movies.map(movie => {
              return <li className="item">{movie}</li>;
            })}
          </ul>
      </div>
    );
  }
  render() {
    return <div>{this.renderMovies()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie
  };
};

export default connect(mapStateToProps)(MovieList);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieList.css";

class MovieList extends Component {
  renderMovies() {
    const { movies } = this.props;
    return movies.map(movieAdded => {
      return (
        <ul key={movieAdded.id}>
          <li>
            <div>
              {movieAdded.movie}
              <i className="close icon" />
            </div>
          </li>
        </ul>
      );
    });
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

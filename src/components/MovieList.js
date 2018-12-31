import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/index";
import "./MovieList.css";

class MovieList extends Component {
  deleteMovieHandler(id) {
    this.props.deleteMovie(id);
  }

  renderMovies() {
    const { movies } = this.props;
    return movies.map(movieAdded => {
      return (
        <ul key={movieAdded.id}>
          <li>
            <div className="ui middle aligned selection list">
              <div className="item">
                {movieAdded.movie}
                <div
                  onClick={() => this.deleteMovieHandler(movieAdded.id)}
                  className="delete-button"
                >
                  <i className="fas fa-window-close" />
                </div>
              </div>
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

const mapDispatchToProps = {
  deleteMovie
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

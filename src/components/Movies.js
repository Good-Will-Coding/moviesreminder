import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../actions";
import FormValidationError from "./FormValidationError";

import "./Movies.css";

class AddMovie extends Component {
  state = {
    term: "",
    formValidation: false
  };

  // Add movie to list
  addMovieHandler = e => {
    e.preventDefault();
    this.state.term === "" ? this.setState({ formValidation: !this.state.formValidation })
    : this.props.addMovie(this.state.term);
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui form">
          <form>
            <div className="ui input fluid action input">
              <input
                type="text"
                placeholder="Add movie..."
                onChange={e => this.setState({ term: e.target.value, formValidation: false })}
                value={this.state.term}
              />
              <button onClick={this.addMovieHandler} className="ui button primary">
                Add Movie
              </button>
            </div>
          </form>
          <FormValidationError error={this.state.formValidation} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie
  };
};

const mapDispatchToProps = {
  addMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);

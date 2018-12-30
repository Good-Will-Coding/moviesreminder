import React, { Component } from "react";
import { connect } from "react-redux";
import addMovieAction from "../actions/index";

class AddMovie extends Component {
  state = {
    term: ""
  };

  addMovie = e => {
    e.preventDefault();
    this.props.addMovieAction(this.state.term);
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
                onChange={e => this.setState({ term: e.target.value })}
                value={this.state.term}
              />
              <button onClick={this.addMovie} className="ui button primary">
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

const mapDispatchToProps = {
  addMovieAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);

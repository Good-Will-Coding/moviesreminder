import React from "react";

const AddMovie = () => {
  return (
    <div className="ui container">
      <div className="ui input fluid action input">
        <input type="text" placeholder="Add movie..." />
        <button className="ui button primary">Add Movie</button>
      </div>
    </div>
  );
};

export default AddMovie;

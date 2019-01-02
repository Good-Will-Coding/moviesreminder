import React from "react";
import './FormValidationError.css';

const FormValidationError = props => {
  return (
    <div>
      {props.error && 
        <div className="ui negative message">
          <div className="header">
            You must enter a movie title.
          </div>
        </div>
      }
    </div>
  );
};

export default FormValidationError;

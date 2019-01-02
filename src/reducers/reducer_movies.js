import { ADD_MOVIE, DELETE_MOVIE } from "../constants/actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [
        ...state,
        {
          id: action.id,
          movie: action.payload
        }
      ];
    case DELETE_MOVIE:
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
}

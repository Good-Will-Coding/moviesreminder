import { ADD_MOVIE } from '../constants/actionTypes';


export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, {
        id: action.id,
        movie: action.payload
      }];
    default:
      return state;
  }
}

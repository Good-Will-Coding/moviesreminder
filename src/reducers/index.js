import { combineReducers } from 'redux';
import addMovie from './reducer_add_movie';

export default combineReducers({
 movie: addMovie
});
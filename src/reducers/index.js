import { combineReducers } from 'redux';
import reducer from './reducer_movies';





export default combineReducers({
 movie: reducer
});
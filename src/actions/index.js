import { ADD_MOVIE } from '../constants/actionTypes';

const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export default addMovie;
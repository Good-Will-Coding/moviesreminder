import { ADD_MOVIE } from '../constants/actionTypes';

const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        id: Math.random(),
        payload: movie
    }
}

export default addMovie;
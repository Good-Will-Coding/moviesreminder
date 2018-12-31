import { ADD_MOVIE, DELETE_MOVIE } from '../constants/actionTypes';



export const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        id: Math.random(),
        payload: movie
    }
}

export const deleteMovie = id => {
    return {
        type: DELETE_MOVIE,
        id
    }
}
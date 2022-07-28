import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_FILTERED_VIDEOGAMES = "GET_FILTERED_VIDEOGAMES";
export const GET_DETAIL_VIDEOGAME = "GET_DETAIL_VIDEOGAME";
export const EMPTY_DETAIL_VIDEOGAME = "EMPTY_DETAIL_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";

export function getVideoGames() {
    return function (dispatch) {
        return axios
            .get(
                `http://localhost:3001/videogames`
            )
            .then(({ data }) => {
                dispatch({ type: GET_VIDEOGAMES, payload: data });
            });
    };
}

export function getDetailVideoGame(id) {
    return function (dispatch) {
        return axios
            .get(
                `http://localhost:3001/videogame/${id}`
            )
            .then(({ data }) => {
                dispatch({ type: GET_DETAIL_VIDEOGAME, payload: data });
            });
    };
}

export function emptyDetailVideoGame() {
    return function (dispatch) {
        dispatch({ type: EMPTY_DETAIL_VIDEOGAME });
    };
}

export function getGenres() {
    return function (dispatch) {
        return axios
            .get(
                `http://localhost:3001/genres`
            )
            .then(({ data }) => {
                dispatch({ type: GET_GENRES, payload: data });
            });
    };
}


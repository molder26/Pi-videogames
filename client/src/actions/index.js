import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAIL_VIDEOGAME = "GET_DETAIL_VIDEOGAME";
export const EMPTY_DETAIL_VIDEOGAME = "EMPTY_DETAIL_VIDEOGAME";
export const GET_GENRES = "GET_GENRES";
export const ORDER_VIDEOGAMES = "ORDER_VIDEOGAMES";
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const EMPTY_FILTERED_VIDEOGAMES = "EMPTY_FILTERED_VIDEOGAMES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";

export function getVideoGames() {
    return function (dispatch) {
        return axios
            .get(`http://localhost:3001/videogames`)
            .then(({ data }) => {
                dispatch({ type: GET_VIDEOGAMES, payload: data });
            });
    };
}

export function getDetailVideoGame(id) {
    return function (dispatch) {
        return axios
            .get(`http://localhost:3001/videogame/${id}`)
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
        return axios.get(`http://localhost:3001/genres`).then(({ data }) => {
            dispatch({ type: GET_GENRES, payload: data });
        });
    };
}

export function orderVideoGames(order) {
    return function (dispatch) {
        dispatch({ type: ORDER_VIDEOGAMES, payload: order });
    };
}

export function filterVideoGames(filter) {
    return function (dispatch) {
        dispatch({ type: FILTER_VIDEOGAMES, payload: filter });
    };
}

export function searchVideoGames(name) {
    return function (dispatch) {
        return axios
            .get(`http://localhost:3001/videogames?name=${name}`)
            .then(({ data }) => {
                dispatch({ type: SEARCH_VIDEOGAMES, payload: data });
            });
    };
}

export function emptyFilteredVideoGames() {
    return function (dispatch) {
        dispatch({ type: EMPTY_FILTERED_VIDEOGAMES });
    };
}

export function createVideogame(obj) {
    return (dispatch) =>
        fetch("http://localhost:3001/videogames", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((resp) => resp.json())
            .then((json) => {
                dispatch({ type: CREATE_VIDEOGAME, payload: json });
            });
}

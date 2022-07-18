import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

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



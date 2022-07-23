import {
    GET_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    EMPTY_DETAIL_VIDEOGAME,
    GET_GENRES,
} from "../actions/index";

const initialState = {
    allVideoGames: [],
    detailVideoGame: {},
    allGenres: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_VIDEOGAMES) {
        return {
            ...state,
            allVideoGames: action.payload,
        };
    }
    if (action.type === GET_DETAIL_VIDEOGAME) {
        return {
            ...state,
            detailVideoGame: action.payload,
        };
    }
    if (action.type === EMPTY_DETAIL_VIDEOGAME) {
        return {
            ...state,
            detailVideoGame: {},
        };
    }
    if (action.type === GET_GENRES) {
        return {
            ...state,
            allGenres: action.payload,
        };
    }

    return state;
}

export default rootReducer;

import { GET_VIDEOGAMES, GET_DETAIL_VIDEOGAME, EMPTY_DETAIL_VIDEOGAME } from "../actions/index";

const initialState = {
    allVideoGames: [],
    detailVideoGame: {},
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

    return state;
}

export default rootReducer;

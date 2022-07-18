import { GET_VIDEOGAMES } from "../actions/index";

const initialState = {
    allVideoGames: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_VIDEOGAMES) {
        return {
            ...state,
            allVideoGames: action.payload,
        };
    }

    return state;
}

export default rootReducer;

import {
    GET_VIDEOGAMES,
    GET_DETAIL_VIDEOGAME,
    EMPTY_DETAIL_VIDEOGAME,
    GET_GENRES,
    ORDER_VIDEOGAMES,
    FILTER_VIDEOGAMES,
    SEARCH_VIDEOGAMES,
    EMPTY_FILTERED_VIDEOGAMES,
    CREATE_VIDEOGAME
} from "../actions/index";

const initialState = {
    allVideoGames: [],
    filteredVideoGames: [],
    detailVideoGame: {},
    allGenres: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_VIDEOGAMES) {
        return {
            ...state,
            allVideoGames: action.payload,
            filteredVideoGames: action.payload,
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
    if (action.type === ORDER_VIDEOGAMES) {
        if (action.payload === "abc-asc") {
            return {
                ...state,
                filteredVideoGames: [...state.allVideoGames].sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            };
        }
        if (action.payload === "abc-desc") {
            return {
                ...state,
                filteredVideoGames: [...state.allVideoGames].sort((a, b) =>
                    b.name.localeCompare(a.name)
                ),
            };
        }
        if (action.payload === "rating-desc") {
            return {
                ...state,
                filteredVideoGames: [...state.allVideoGames].sort(
                    (a, b) => a.rating - b.rating
                ),
            };
        }
        if (action.payload === "rating-asc") {
            return {
                ...state,
                filteredVideoGames: [...state.allVideoGames].sort(
                    (a, b) => b.rating - a.rating
                ),
            };
        }
        return {
            ...state,
            filteredVideoGames: state.allVideoGames,
        };
    }
    if (action.type === FILTER_VIDEOGAMES) {
        const filtered = state.allVideoGames.filter((game) =>
            game.genres.includes(action.payload)
        );
        return {
            ...state,
            filteredVideoGames: filtered.length > 0 ? filtered : "No games",
        };
    }
    if (action.type === SEARCH_VIDEOGAMES) {
        const filtered = action.payload;
        return {
            ...state,
            filteredVideoGames: filtered.length > 0 ? filtered : "No games",
        };
    }
    if (action.type === EMPTY_FILTERED_VIDEOGAMES) {
        return {
            ...state,
            filteredVideoGames: [],
        };
    }
    // if (action.type === CREATE_VIDEOGAME) {
    //     const newgame = action.payload;

    //     return {
    //         ...state,
    //         allVideoGames: ,
    //     };
    // }

    return state;
}

export default rootReducer;

import {
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
    ADD_RECIPE,
    GET_RECIPE
} from "./actions"

const init = {
    recipes: [],
    loading: false,
    fetched: true,
    error: ''
}

export const recipesReducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_RECIPES_START:
            return {
                ...state,
                loading: true,
                fetched: false
            }
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                loding: false,
                fetched: true,
            }
        case FETCH_RECIPES_ERROR:
            return {
                ...state,
                loading: false,
                fetched: false
            }
        default:
            return state || init
    }
}
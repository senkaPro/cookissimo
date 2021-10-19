import axios from "axios"
import { ENDPOINT, QUERY } from "../webservices"

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START'
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR'
export const ADD_RECIPE = 'ADD_RECIPE'
export const GET_RECIPE = 'GET_RECIPE'

const fetchStart = () => {
    return {
        type: FETCH_RECIPES_START
    }
}

const fetchSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes
    }
}

const fetchError = (message) => {
    return {
        type: FETCH_RECIPES_ERROR,
        payload: message
    }
}

export const fetchRecipes = state => dispatch => {
    dispatch(fetchStart)
    axios.get(ENDPOINT)
        .then(({ data: { hits } }) => {
            const recipes = hits.map(({ recipe }, i) => ({
                id: i,
                name: recipe.label,
                source: recipe.source,
                ingrCount: recipe.ingredients.length,
                ingredients: recipe.ingredients.map(food => ({ name: food.food, quantity: food.quantity })),
                instructions: recipe.ingredientLines,
                totalTime: recipe.totalTime
                
            }))
            dispatch(fetchSuccess(recipes))
        })
        .catch(e => dispatch(fetchError(e.message)))
}
let index = 1500
export const addRecipeToStore = ({ name, source, ingrCount, ingredients, instructions, totalTime }) => dispatch => {
    const newRecipe = {
        id: index,
        name,
        source,
        ingrCount,
        ingredients: ingredients.map(food => ({ name: food.ingrName, quantity: food.ingrQuantity })),
        instructions,
        totalTime
    }
    dispatch({
        type: ADD_RECIPE,
        payload: newRecipe
    })
    index++
}


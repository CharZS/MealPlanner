import { combineReducers } from 'redux'
import { ADD_RECIPE } from '../actions'

function recipe(state, action) {
    switch (action.type) {

        case ADD_RECIPE:
            return {
                id: action.id,
                recipe: action.recipe,
            }

        default:
            return state
    }
}

function recipes(state = [], action) {
    switch (action.type) {

        case ADD_RECIPE:
            return [
                ...state,
                recipe(undefined, action)
            ]

        default:
            return state
    }
}

const recipeApp = combineReducers({ recipes })

export default recipeApp

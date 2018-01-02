import shortid from 'shortid';

export const ADD_RECIPE = 'ADD_RECIPE'

export function addRecipe(recipe) {
    let newId = shortid.generate();
    let newRecipe = {}
    newRecipe[newId] = recipe;
    return {
        type: ADD_RECIPE,
        newRecipe: newRecipe
    }
}

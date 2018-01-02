const recipes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return Object.assign(
                {},
                state,
                action.newRecipe
            );

        default:
            return state;
    }
};

export default recipes

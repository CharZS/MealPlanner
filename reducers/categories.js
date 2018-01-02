import { combineReducers } from 'redux';

const categories = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.categoriesJson;

        case 'ADD_CATEGORY':
            return Object.assign(
                {},
                state,
                action.categoryItem
            );

        case 'EDIT_CATEGORY':
            return state;

        case 'DELETE_CATEGORY':
            return state;

        default:
            return state;
    }
};

export default categories

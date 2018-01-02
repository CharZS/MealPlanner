import shortid from 'shortid';

export const setCategories = (categoriesJson) => {
    return {
        type: 'SET_CATEGORIES',
        categoriesJson: categoriesJson
    }
}

export const addCategory = (categoryName, categoryIcon) => {
    let newId = shortid.generate();
    let newCat = {};
    newCat[newId] = {
        title: categoryName,
        icon: categoryIcon
    };
    return {
        type: 'ADD_CATEGORY',
        categoryItem: newCat,
    }
}

export const editCategory = (categoryId, categoryName, categoryIcon) => {
    return {
        type: 'EDIT_CATEGORY',
        categoryId: categoryId,
        categoryName: categoryName,
        categoryIcon: categoryIcon
    }
}

export const deleteCategory = (categoryId, categoryName, categoryIcon) => {
    return {
        type: 'DELETE_CATEGORY',
        categoryId: categoryId,
        categoryName: categoryName,
        categoryIcon: categoryIcon
    }
}

import categories from './categories';
import icons from './icons';
import recipes from './recipes';

export default function recipeApp(state = {}, action) {
    return {
        categories: categories(state.categories, action),
        icons: icons(state.icons, action),
        recipes: recipes(state.recipes, action)
    }
}

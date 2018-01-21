import categories from './categories';
import icons from './icons';
import recipes from './recipes';
import settings from './settings';
import stockItems from './stockItems';

export default function recipeApp(state = {}, action) {
    return {
        categories: categories(state.categories, action),
        icons: icons(state.icons, action),
        recipes: recipes(state.recipes, action),
        settings: settings(state.settings, action),
        stockItems: stockItems(state.stockItems, action)
    }
}

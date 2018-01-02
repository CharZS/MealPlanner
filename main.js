import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.jsx';
import recipeApp from './reducers';
import * as actions from './actions';
import categoriesJson from './categories.json';
import iconsJson from './icons.json';

let store = createStore(recipeApp);

store.dispatch(actions.setCategories(categoriesJson));
store.dispatch(actions.setIcons(iconsJson));

let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
        <App />
    </Provider>,

    rootElement
)

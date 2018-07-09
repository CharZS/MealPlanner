import React from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Row} from 'react-bootstrap';
//import PouchDB from 'pouchdb-react-native';

import MainContent from './components/MainContent.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import Config from './components/Config.jsx';

//const db = new PouchDB('mealPlannerDB');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="recipe-app">
                <div id="main-menu">
                    <AddRecipeForm />
                    <Config />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-18">
                </div>
                <div>
                    <div className="show-grid">
                        <MainContent/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

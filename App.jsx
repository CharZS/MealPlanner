import React from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Row} from 'react-bootstrap';

import MainMenu from './components/MainMenu.jsx';
import MainContent from './components/MainContent.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="recipe-app">
                <MainMenu/>
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

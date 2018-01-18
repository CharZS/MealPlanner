import React from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, Row} from 'react-bootstrap';
import MainContent from './components/MainContent.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import Config from './components/Config.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="recipe-app" className="container">
                <h2>{this.props.headerProp}</h2>
                <p>{this.props.contentProp}</p>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-18">
                    <AddRecipeForm />
                    <Config />
                </div>
                <Grid>
                    <Row className="show-grid">
                        <MainContent/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    headerProp: PropTypes.string,
    contentProp: PropTypes.string
}

App.defaultProps = {
    headerProp: "Dinner Schedule App",
    contentProp: "Char's app to keep her tracked and sane."
}

export default App;

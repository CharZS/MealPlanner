import React from 'react';
import {Button, Glyphicon, Grid, Row, Tabs, Tab} from 'react-bootstrap';
import MainContent from './components/MainContent.jsx';
import RecipesCategories from './components/RecipesCategories.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import Config from './components/Config.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddRecipeModal: false,
            showConfigModal: false,
        }

        this.openAddRecipe = this.openAddRecipe.bind(this);
        this.closeAddRecipe = this.closeAddRecipe.bind(this);
        this.openConfig = this.openConfig.bind(this);
        this.closeConfig = this.closeConfig.bind(this);
    }

    openAddRecipe() {
        this.setState({ showAddRecipeModal: true });
    }

    closeAddRecipe() {
        this.setState({ showAddRecipeModal: false });
    }

    openConfig() {
        this.setState({ showConfigModal: true });
    }

    closeConfig() {
        this.setState({ showConfigModal: false });
    }

    // TO ADJUST NAMING CONVENTION AND GROUPING THE ABOVE FOR BETTER STRUCTURE
    render() {
        return (
            <div id="recipe-app" className="container">
                <h2>{this.props.headerProp}</h2>
                <p>{this.props.contentProp}</p>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-18">
                    <Button bsStyle="primary" onClick={this.openAddRecipe}>Add Recipe</Button>
                    <Button bsStyle="info" onClick={this.openConfig}><Glyphicon glyph="cog" /></Button>
                </div>
                <Grid>
                    <Row className="show-grid">
                        <MainContent/>
                    </Row>
                </Grid>
                <AddRecipeForm showAddRecipe={this.state.showAddRecipeModal} hideAddRecipe={this.closeAddRecipe}/>
                <Config showConfig={this.state.showConfigModal} hideConfig={this.closeConfig}/>
            </div>
        );
    }
}

App.propTypes = {
    headerProp: React.PropTypes.string,
    contentProp: React.PropTypes.string
}

App.defaultProps = {
    headerProp: "Dinner Schedule App",
    contentProp: "Char's app to keep her tracked and sane."
}

export default App;

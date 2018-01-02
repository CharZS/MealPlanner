import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, ControlLabel, form, FormControl, FormGroup, HelpBlock, InputGroup, Modal, ModalBody, ModalFooter, ModalHeader, Tabs, Tab} from 'react-bootstrap';
import * as actions from '../actions';

let createHandlers = function(dispatch) {
    let addRecipe = function(recipe) {
        dispatch(actions.addRecipe(recipe))
    };

    return {
        addRecipe,
    }
}

class AddRecipeForm extends Component {
    constructor(props) {
        super(props);

        this.handlers = createHandlers(this.props.dispatch);

        this.state = {
            recipe: {
                name: "",
                prep: "",
                cook: "",
                servings: "",
                gramsPerServing: 0,
                health: {
                    energy: 0,
                    fat: 0,
                    saturates: 0,
                    sugars: 0,
                    salt: 0,
                },
                ingredients: "",
                method: "",
                servingSuggestion: "",
                categories: "",
                link: "",
                video: "",
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let recipe = this.state.recipe;
        switch (e.target.id) {
            case 'energy':
            case 'fat':
            case 'saturates':
            case 'sugars':
            case 'salt':
                recipe.health[e.target.id] = e.target.value;
                break;

            default:
                recipe[e.target.id] = e.target.value;
                break;
        }
        this.setState({ recipe : recipe});
    }

    //USE CSS TO CAPITILISE NAMES
    renderForm() {
        var recipe = this.state.recipe;
        return (
            Object.keys(recipe).map((entity, i) => {
                let label = entity;
                switch (entity) {
                    case "prep":
                    case "cook":
                        label = label + " time";
                        break;

                    case "gramsPerServing":
                    case "servingSuggestion":
                        label = label.replace(/([A-Z])/g, ' $1').trim();
                        break;
                }
                if (entity == "health") {
                    let healthObjects = [];
                    Object.keys(recipe[entity]).map((entityHealth, h) => {
                        healthObjects.push(
                            <InputGroup key={"ig-"+i+"-"+h}>
                                <InputGroup.Addon key={"iga-"+h}>{entityHealth}</InputGroup.Addon>
                                <FormControl id={entityHealth} type="text" value={this.state.recipe[entity][entityHealth]} onChange={this.handleChange} key={"tx-"+h}/>
                            </InputGroup>
                        );
                    })
                    return healthObjects;
                } else if (entity == "ingredients") {
                    return (
                        <FormGroup key={"fg-"+i}>
                            <ControlLabel key={"cl-"+i}>{label}</ControlLabel>
                            <FormControl id={entity} componentClass="textarea" value={this.state.recipe[entity]} onChange={this.handleChange} key={"ta-"+i}/>
                            <HelpBlock>Seperate ingredients with a semi-colon (;)</HelpBlock>
                        </FormGroup>
                    );
                } else if (entity == "method") {
                    return (
                        <FormGroup key={"fg-"+i}>
                            <ControlLabel key={"cl-"+i}>{label}</ControlLabel>
                            <FormControl id={entity} componentClass="textarea" value={this.state.recipe[entity]} onChange={this.handleChange} key={"ta-"+i}/>
                            <HelpBlock>Seperate steps with a semi-colon (;)</HelpBlock>
                        </FormGroup>
                    );
                } else if (entity == "categories") {
                    let categoryOptions = [];
                    Object.keys(this.props.categories).map((entityj, j) => {
                        let categoryName = this.props.categories[entityj].title;
                        categoryOptions.push(
                            <option value={entityj} key={"o-"+j}>{categoryName}</option>
                        );
                    });
                    return (
                        <InputGroup key={"ig-"+i}>
                            <InputGroup.Addon key={"igl-"+i}>{label}</InputGroup.Addon>
                            <FormControl id={entity} componentClass="select" key={"s-"+i} onChange={this.handleChange}>
                                {categoryOptions}
                            </FormControl>
                        </InputGroup>
                    );
                } else {
                    return (
                        <InputGroup key={"ig-"+i}>
                            <InputGroup.Addon key={"igl-"+i}>{label}</InputGroup.Addon>
                            <FormControl id={entity} type="text" value={this.state.recipe[entity]} onChange={this.handleChange} key={"tx-"+i}/>
                        </InputGroup>
                    );
                }
            })
        );
    }

    handleClick() {
        this.handlers.addRecipe(this.state.recipe);
        this.setState({
            recipe: {
                name: "",
                prep: "",
                cook: "",
                servings: "",
                gramsPerServing: 0,
                health: {
                    energy: 0,
                    fat: 0,
                    saturates: 0,
                    sugars: 0,
                    salt: 0,
                },
                ingredients: "",
                method: "",
                servingSuggestion: "",
                categories: "",
                link: "",
                video: "",
            }
        });
        this.props.hideAddRecipe();
    }

    render() {
        return (
            <Modal show={this.props.showAddRecipe} onHide={this.props.hideAddRecipe}>
                <ModalHeader>Add Recipe</ModalHeader>
                <form id="recipeForm">
                    <ModalBody>{this.renderForm()}</ModalBody>
                    <ModalFooter>
                        <Button bsStyle="primary" onClick={this.handleClick}>
                            Add recipe
                        </Button>
                    </ModalFooter>
                </form>
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(AddRecipeForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, ControlLabel, form, FormControl, FormGroup, HelpBlock, ModalBody, ModalFooter} from 'react-bootstrap';
import * as actions from '../actions';

let createHandlers = function(dispatch) {
    let setStockItems = function(stockList) {
        dispatch(actions.setStockItems(stockList))
    };

    return {
        setStockItems,
    }
}

class ConfigItems extends Component {
    constructor(props) {
        super(props);

        this.handlers = createHandlers(this.props.dispatch);

        this.state = {
            pantryItems: this.props.stockItems,
        };

        this.onStorageChange = this.onStorageChange.bind(this);
        this.renderStorage = this.renderStorage.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    onStorageChange(event) {
        this.setState({ pantryItems: event.target.value });
    }

    renderStorage() {
        return(
            <div id="storage-sct">
                <FormGroup>
                    <ControlLabel>Pantry Items</ControlLabel>
                    <FormControl componentClass="textarea" onChange={this.onStorageChange} value={this.state.pantryItems} placeholder="List all items you have stocked at home, listing each item on a separate line"/>
                    <HelpBlock>List all items you have stocked at home, listing each item on a separate line</HelpBlock>
                </FormGroup>
            </div>
        );
    }

    saveForm() {
        this.handlers.setStockItems(this.state.pantryItems);
    }

    render() {
        return (
                <form id="configItemsForm">
                    <ModalBody>
                        {this.renderStorage()}
                    </ModalBody>
                    <ModalFooter>
                        <Button bsStyle="primary" onClick={this.saveForm}>Save</Button>
                    </ModalFooter>
                </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        stockItems: state.stockItems
    }
}

export default connect(mapStateToProps)(ConfigItems);

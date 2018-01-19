import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, ControlLabel, form, FormControl, HelpBlock, InputGroup, ModalBody, ModalFooter, ModalHeader} from 'react-bootstrap';
import * as actions from '../actions';

let createHandlers = function(dispatch) {

}

class ConfigSettings extends Component {
    constructor(props) {
        super(props);

        this.handlers = createHandlers(this.props.dispatch);

        this.state = {
            defaultServings: 0,
        };

        this.onSettingsChange = this.onSettingsChange.bind(this);
        this.renderSettings = this.renderSettings.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    onSettingsChange(event) {
        this.setState({ defaultServings: event.target.value });
    }

    renderSettings() {
        return (
            <div id="settings-sct">
                <InputGroup className="servings-counter-text">
                    <InputGroup.Addon>
                        Default number of servings per meal
                    </InputGroup.Addon>
                    <FormControl key={1} type="text" value={this.state.defaultServings} onChange={this.onSettingsChange} />
                </InputGroup>
                    <HelpBlock>This allows for meal leftovers calculations</HelpBlock>
            </div>
        );
    }

    saveForm() {
        this.props.hideConfig();
    }

    render() {
        return (
            <form id="configSettingsForm">
                <ModalHeader>Settings</ModalHeader>
                <ModalBody>
                    {this.renderSettings()}
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

    }
}

export default connect(mapStateToProps)(ConfigSettings);

import React, { Component } from 'react';
import {Button, ControlLabel, form, FormControl, FormGroup, Grid, InputGroup, ModalBody, ModalFooter, ModalHeader} from 'react-bootstrap';

class ConfigSettings extends Component {
    constructor(props) {
        super(props);
    }

    saveForm() {
        this.props.hideConfig();
    }

    render() {
        return (
                <form id="configForm">
                    <ModalHeader>Settings</ModalHeader>
                    <ModalBody>
                        content here
                    </ModalBody>
                    <ModalFooter>
                        <Button bsStyle="primary" onClick={this.saveForm}>Save</Button>
                    </ModalFooter>
                </form>
        );
    }
}

export default ConfigSettings;

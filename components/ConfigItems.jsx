import React, { Component } from 'react';
import {Button, ControlLabel, form, FormControl, FormGroup, Grid, InputGroup, ModalBody, ModalFooter, ModalHeader} from 'react-bootstrap';

class ConfigItems extends Component {
    constructor(props) {
        super(props);

        this.saveForm = this.saveForm.bind(this);
    }

    saveForm() {
        this.props.hideConfig();
    }

    render() {
        return (
                <form id="configForm">
                    <ModalHeader>Pantry Items List</ModalHeader>
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

export default ConfigItems;

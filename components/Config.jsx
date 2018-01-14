import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import ConfigCategory from './ConfigCategory.jsx';

class Config extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey={1} id="config-tabs">
                    <Tab eventKey={1} title="Category">
                        <ConfigCategory />
                    </Tab>
                    <Tab eventKey={2} title="Settings"></Tab>
                    <Tab eventKey={3} title="Pantry Items"></Tab>
                </Tabs>
            </div>
        );
    }
}

export default Config;

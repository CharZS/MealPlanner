import React, { Component } from 'react';
import {Modal, Tab, Tabs} from 'react-bootstrap';
import ConfigSettings from './ConfigSettings.jsx';
import ConfigCategory from './ConfigCategory.jsx';
import ConfigItems from './ConfigItems.jsx';

class Config extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showConfigModal: false,
        }

        this.openConfig = this.openConfig.bind(this);
        this.closeConfig = this.closeConfig.bind(this);
    }

    openConfig() {
        this.setState({ showConfigModal: true });
    }

    closeConfig() {
        this.setState({ showConfigModal: false });
    }

    render() {
        return (
            <div className="menu-item" onClick={this.openConfig}>
                <i className="fas fa-cogs"></i>
                <Modal show={this.state.showConfigModal} onHide={this.closeConfig}>
                    <Tabs defaultActiveKey={1} id="config-tabs">
                        <Tab eventKey={1} title="Settings">
                            <ConfigSettings closeConfig={this.closeConfig}/>
                        </Tab>
                        <Tab eventKey={2} title="Category">
                            <ConfigCategory closeConfig={this.closeConfig}/>
                        </Tab>
                        <Tab eventKey={3} title="Pantry Items">
                            <ConfigItems closeConfig={this.closeConfig}/>
                        </Tab>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default Config;

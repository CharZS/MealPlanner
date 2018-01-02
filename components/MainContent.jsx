import React, { Component } from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';
import DinnerSchedule from './DinnerSchedule.jsx';

class MainContent extends Component {
    render() {
        return (
            <Col lg={8} md={8} sm={8}>
                <Tabs defaultActiveKey={1} id="tab-main-content">
                    <Tab eventKey={1} title="Dinner Schedule">
                        <DinnerSchedule />
                    </Tab>
                </Tabs>
            </Col>
        );
    }
}

export default MainContent;

import React, { Component } from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';
import DinnerSchedule from './DinnerSchedule.jsx';

class MainContent extends Component {
    render() {
        return (
            <Col lg={12} md={12} sm={12} id="tab-main-content">
                <DinnerSchedule />
            </Col>
        );
    }
}

export default MainContent;

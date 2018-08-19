import React from 'react';
import {Button, Col, Grid, Image, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'react-bootstrap'; 

class HelpfulTips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showTipsModal: false,
        }

        this.openTips = this.openTips.bind(this);
        this.closeTips = this.closeTips.bind(this);
    }

    openTips() {
        this.setState({ showTipsModal: true });
    }

    closeTips() {
        this.setState({ showTipsModal: false });
    }

    render() {
        return (
            <div className="menu-item helpful-tips" onClick={this.openTips}>
                Helpful Tips
                <Modal show={this.state.showTipsModal} onHide={this.closeTipsModal}>
                    <ModalHeader>Helpful Tips</ModalHeader>
                    <ModalBody>
                        <Grid>
                            <Row>
                                <Col xs={6} md={3}>
                                    <Image src="./images/Herbs.png" thumbnail />
                                </Col>
                            </Row>
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                        <Button bsStyle="warning" onClick={this.closeTips}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default HelpfulTips;

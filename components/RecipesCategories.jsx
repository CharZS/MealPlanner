import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Col, ModalBody, ModalFooter, ModalHeader, Tabs, Tab} from 'react-bootstrap';
import RecipesList from './RecipesList.jsx';

class RecipesCategories extends Component {

    constructor(props) {
        super(props);

        this.getRecCatsList = this.getRecCatsList.bind(this);
    }

    getRecCatsList() {
        return(
            Object.keys(this.props.categories).map((entity, i) => {
                let imgData = this.props.categories[entity].icon;
                let img = <img src={"../style/icons/food/32/"+imgData+".png"} alt={this.props.categories[entity].title}/>;
               return (
                    <Tab eventKey={i} title={img} key={i}>
                        {this.props.categories[entity].title} content
                        <RecipesList categoryId={entity} />
                    </Tab>
               )
            })
        );
    }

    render() {
        return (
            <div>
                <ModalHeader>Add a meal</ModalHeader>
                <ModalBody>
                    <Col>
                        <Tabs defaultActiveKey={0} id="tab-main-content">
                            {this.getRecCatsList()}
                        </Tabs>
                    </Col>
                </ModalBody>
                <ModalFooter><Button bsStyle="info" onClick={this.props.closeWindow}>Close</Button></ModalFooter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
    }
}

export default connect(mapStateToProps)(RecipesCategories);

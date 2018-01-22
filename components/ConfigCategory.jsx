import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Col, ControlLabel, form, FormControl, FormGroup, Grid, InputGroup, ModalBody, ModalFooter, Radio, Row} from 'react-bootstrap';
import * as actions from '../actions';

let createHandlers = function(dispatch) {
    let addCategory = function(categoryName, categoryIcon) {
        dispatch(actions.addCategory(categoryName, categoryIcon))
    };

    return {
        addCategory,
    }
}

class ConfigCategory extends Component {
    constructor(props) {
        super(props);

        this.handlers = createHandlers(this.props.dispatch);

        this.state = {
            configItems: 1,
            addEditState: 0, /// 0 = Add | 1 = Edit
            newCatName: "",
            selectedIcon: "",
        }

        this.addEditCat = this.addEditCat.bind(this);
        this.editCat = this.editCat.bind(this);
        this.deleteCat = this.deleteCat.bind(this);
        this.onCatChange = this.onCatChange.bind(this);
        this.selectedIcon = this.selectedIcon.bind(this);
        this.getIcons = this.getIcons.bind(this);
        this.renderConfigForm = this.renderConfigForm.bind(this);
        this.renderConfigList = this.renderConfigList.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    addEditCat() {
        ///if add - take state data, and add to json file
        this.handlers.addCategory(this.state.newCatName, this.state.selectedIcon);
        ///if edit - take state data and edit json file where id is found
        this.setState({
            addEditState: 0,
            newCatName: "",
            selectedIcon: "",
        });
    }

    editCat(entity) {
        this.setState({
            addEditState: 1, // 1 = edit
            newCatName: entity.title,
            selectedIcon: entity.icon
        });
    }

    deleteCat() {
        ///delete from
    }

    onCatChange(event) {
        this.setState({ newCatName: event.target.value });
    }

    selectedIcon(iconName) {
        this.setState({ selectedIcon: iconName });
    }

    getIcons() {
        return Object.keys(this.props.icons).map((entity, i) => {
            let iconName = this.props.icons[entity];
            let selectedClass = "";
            if (this.state.selectedIcon == iconName) {
                selectedClass = " iconPicker-selected";
            }
            return (
                <a role="button" className={"iconPicker"+selectedClass} key={i} value={iconName} onClick={() => this.selectedIcon(iconName)} title={iconName}>
                    <i className={iconName + " iconPicker"}>{iconName}</i>
                </a>
            )
        });
    }

    renderConfigForm() {
        let buttonText = "Add Category";
        let buttonStyle = "success";
        let deleteBtn = "";
        if (this.state.addEditState == 1) {
            buttonText = "Edit Category";
            buttonStyle = "warning";
            deleteBtn =
                <Button bsStyle="danger" className="del-cat-btn" block onClick={this.deleteCat
                }>Delete Category</Button>;
        }
        return (
            <div id="add-cat-sct">
                <InputGroup className="cat-text">
                    <InputGroup.Addon>
                        Category Name
                    </InputGroup.Addon>
                    <FormControl key={1} type="text" value={this.state.newCatName} onChange={this.onCatChange}/>
                </InputGroup>
                <div className="icon-labels col-md-12 col-sm-12 col-xs-18">
                    <ControlLabel className="col-md-6 col-sm-6 col-xs-9">Category Icons</ControlLabel>
                    <ControlLabel className="col-md-6 col-sm-6 col-xs-9">Selected Icon:<i className={this.state.selectedIcon}></i></ControlLabel>
                </div>
                <FormGroup className="cat-icons">
                    {this.getIcons()}
                </FormGroup>
                <Button bsStyle={buttonStyle} className="add-cat-btn" block onClick={this.addEditCat}>{buttonText}</Button>
                {deleteBtn}
            </div>
        );
    }

    renderConfigList() {
        var rowCapacity = 1;
        var fullList = [];
        var rowList = [];
        var catLength = Object.keys(this.props.categories).length;
        Object.keys(this.props.categories).map((entity, i) => {
            if (rowCapacity < 7) {
                rowList.push(
                        <Col md={2} sm={2} xs={3} className="cat-col" key={"col-"+i}>
                            <i key={"i-"+i} className={this.props.categories[entity].icon}></i><br/>
                            {this.props.categories[entity].title}<br/>
                            <Button bsStyle="info" bsSize="xsmall" key={"edit-"+i} onClick={() => this.editCat(this.props.categories[entity])}>Edit</Button>
                        </Col>
                )
            }
            if (rowCapacity == 6) {
                fullList.push(<Row key={"row-"+i}>{rowList}</Row>);
                rowCapacity = 0;
                rowList = [];
            }
            rowCapacity++;
            if ((i == (catLength - 1)) && (rowList.length != 0))
            {
                fullList.push(<Row key={"row-"+i}>{rowList}</Row>);
            }
        });

        return fullList;
        fullList = [];
    }

    saveForm() {
        this.props.hideConfig();
    }

    render() {
        return (
            <form id="configCategoryForm">
                <ModalBody>
                    {this.renderConfigForm()}
                    <hr />
                    <Grid bsClass="modal-body" className="cat-list-config">
                        {this.renderConfigList()}
                    </Grid>
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
        categories: state.categories,
        icons: state.icons
    }
}

export default connect(mapStateToProps)(ConfigCategory);

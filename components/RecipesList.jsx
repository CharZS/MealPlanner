import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipesList extends Component {

    constructor(props) {
        super(props);

        this.getRecCatsList = this.getRecCatsList.bind(this);
    }

    getRecCatsList() {
        return(
            Object.keys(this.props.recipes).map((entity, i) => {
                if (this.props.categoryId == this.props.recipes[entity].categories) {
                    return (
                        this.props.recipes[entity].name
                    )
                }
            })
        );
    }

    render() {
        return (
            <div>
                {this.getRecCatsList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps)(RecipesList);

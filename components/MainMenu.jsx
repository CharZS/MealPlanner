import React from 'react';

import AddRecipeForm from './AddRecipeForm.jsx';
import Config from './Config.jsx';
import HelpfulTips from './HelpfulTips.jsx';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-menu">
                <AddRecipeForm />
                <Config />
                <HelpfulTips />
            </div>
        );
    }
}

export default MainMenu;

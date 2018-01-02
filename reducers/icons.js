const icons = (state = [], action) => {
    switch (action.type) {
        case 'SET_ICONS':
            return action.iconsJson;

        default:
            return state;
    }
};

export default icons

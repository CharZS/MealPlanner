const stockItems = (state = [], action) => {
	switch (action.type) {
		case 'SET_STOCKITEMS':
			return action.stockItems;

		default:
			return state;
	}
};

export default stockItems
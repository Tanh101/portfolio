interface ScrollAction {
    type: string;
    payload: string;
}

const initialState: string = 'home';

const scrollReducer = (state: string = initialState, action: ScrollAction) => {
    switch (action.type) {
        case 'SCROLL':
            return action.payload;
        default:
            return state;
    }
};

export default scrollReducer;

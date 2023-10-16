interface UpdateScrollPositionAction {
    type: string;
    payload: number;
}

interface SetActiveNavLinkAction {
    type: string;
    payload: string;
}

type ScrollAction = UpdateScrollPositionAction | SetActiveNavLinkAction;

interface ScrollState {
    scrollPosition: number;
    activeNavLink: string;
}

const initialState: ScrollState = {
    scrollPosition: 0,
    activeNavLink: 'home',
};

const scrollReducer = (state: ScrollState = initialState, action: ScrollAction): ScrollState => {
    switch (action.type) {
        case 'UPDATE_SCROLL_POSITION':
            return {
                ...state,
                scrollPosition: Number(action.payload),
            };
        case 'SET_ACTIVE_NAV_LINK':
            return {
                ...state,
                activeNavLink: String(action.payload),
            };
        default:
            return state;
    }
};

export default scrollReducer;

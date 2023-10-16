interface ThemeAction {
    type: string;
    payload: string;
}

const initialState:string = 'dark';

const themeReducer = (state:string = initialState, action:ThemeAction) => {
    switch(action.type){
        case 'DARK_THEME':
            return action.payload;
        case 'LIGHT_THEME':
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;

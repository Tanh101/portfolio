export interface ThemeAction {
    type: string;
    payload: string;
}

const darkTheme = (theme: string) => {
    return {
        type: 'DARK_THEME',
        payload: theme
    }
}

const lightTheme = (theme: string) => {
    return {
        type: 'LIGHT_THEME',
        payload: theme
    }
}

export { darkTheme, lightTheme };

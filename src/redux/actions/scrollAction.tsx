export interface ScrollAction {
    type: string,
    payload: string
}

const scrollDown = (navLink: string) => {
    return {
        type: 'SCROLL',
        payload: navLink
    }
}
export default scrollDown;

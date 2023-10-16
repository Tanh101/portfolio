export const updateScrollPosition = (scrollPosition: number) => {
    return {
        type: 'UPDATE_SCROLL_POSITION',
        payload: scrollPosition,
    };
};

export const setActiveNavLink = (navLink: string) => {
    return {
        type: 'SET_ACTIVE_NAV_LINK',
        payload: navLink,
    };
};
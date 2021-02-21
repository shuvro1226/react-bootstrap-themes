import * as actionTypes from './actionTypes';

export const sortThemes = () => {
    return {
        type: actionTypes.SORT_THEMES
    }
}

export const toggleThemePreview = (index, themeState, toggleBtn) => {
    return {
        type: actionTypes.TOGGLE_THEME_LIVE_PREVIEW,
        index: index,
        toggleBtn: toggleBtn,
        themeState: themeState
    }
}

export const filterThemes = (filter) => {
    return {
        type: actionTypes.FILTER_THEMES,
        filter: filter
    }
}
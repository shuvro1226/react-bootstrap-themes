import { config } from '../../config/config';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    themes: config.themesDefaultConfig,
    latestThemes: null,
    popularThemes: null
}

const sortThemes = (state, action) => {
    const themes = [
        ...state.themes
    ];
    themes.sort((a, b) => {
        return (Date.parse(b.added_at) > Date.parse(a.added_at)) ? 1 :
            (Date.parse(a.added_at) > Date.parse(b.added_at)) ? -1 : 0;
    });

    const latestThemes = themes.slice(0, 2);
    const updatedThemes = themes.splice(2, themes.length);

    const popularThemes = [
        ...updatedThemes
    ];
    popularThemes.sort((a, b) => {
        return (b.totalSold > a.totalSold) ? 1 :
            (a.totalSold > b.totalSold) ? -1 : 0;
    });

    return {
        ...state,
        latestThemes: latestThemes,
        popularThemes: popularThemes
    }
}

const toggleThemePreview = (state, action) => {
    const themeConfig = [
        ...state[action.themeState]
    ];

    const updatedThemeConfig = {
        ...themeConfig[action.index],
        showPrevBtn: action.toggleBtn
    };
    themeConfig[action.index] = updatedThemeConfig;

    return {
        ...state,
        [action.themeState]: themeConfig
    }
}

const filterThemes = (state, action) => {
    const themeStates = [
        'latestThemes',
        'popularThemes'
    ];
    let updatedThemes = [];
    for (const themeState of themeStates) {
        const themes = [
            ...state[themeState]
        ];
        updatedThemes.push(themes.map(theme => {
            let visible = false;
            if (theme.name.toLowerCase().includes(action.filter) ||
                theme.description.toLowerCase().includes(action.filter) ||
                theme.category.toLowerCase().includes(action.filter)
            ) {
                visible = true;
            }
            return {
                ...theme,
                visible: visible
            }
        }));
    }
    return {
        ...state,
        latestThemes: updatedThemes[0],
        popularThemes: updatedThemes[1]
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SORT_THEMES:
            return sortThemes(state, action);
        case actionTypes.TOGGLE_THEME_LIVE_PREVIEW:
            return toggleThemePreview(state, action);
        case actionTypes.FILTER_THEMES:
            return filterThemes(state, action);
        default:
            return state;
    }
}

export default reducer;
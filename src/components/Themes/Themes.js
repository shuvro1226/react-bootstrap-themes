import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ThemesHolder from './ThemesHolder/ThemesHolder';
import Banner from '../Banner/Banner';

import styles from './Themes.module.css';

import { config } from '../../config/config';

class Themes extends Component {
    state = {
        latestThemes: null,
        popularThemes: null
    }

    componentDidMount() {
        // Sort themes by 'rating' and 'added_at' to get the Latest and popular themes
        if (this.props.themes) {
            this.onUpdateThemes();
        }
    }

    componentDidUpdate(prevProps) {
        // Sort themes by 'rating' and 'added_at' to get the Latest and popular themes when themes state is updated
        if (this.props.themes && this.props.searchText !== prevProps.searchText) {
            this.onUpdateThemes();
        }
    }

    onUpdateThemes = () => {
        const themes = [
            ...this.props.themes
        ];
        themes.sort((a,b) => {
            return (Date.parse(b.added_at) > Date.parse(a.added_at)) 
                ? 1
                : (Date.parse(a.added_at) > Date.parse(b.added_at)) 
                    ? -1 
                    : 0;
        });

        const latestThemes = themes.slice(0, 2);
        const updatedThemes = themes.splice(2, themes.length);

        const popularThemes = [
            ...updatedThemes
        ];
        popularThemes.sort((a,b) => {
            return (b.totalSold > a.totalSold) 
                ? 1 
                : (a.totalSold > b.totalSold) 
                    ? -1 
                    : 0;
        });

        this.setState({
            latestThemes: latestThemes,
            popularThemes: popularThemes
        })
    }

    // To do actions when a mouse cursor comes over the theme card
    onMouseEnterCard = (index, themeState) => {
        const themeConfig = this.onGetThemeConfig(themeState);

        const updatedThemeConfig = {
            ...themeConfig[index],
            showPrevBtn: true
        };
        themeConfig[index] = updatedThemeConfig;

        this.onUpdateThemesState(themeState, themeConfig);
    }

    // To do actions when a mouse cursor leaves the theme card
    onMouseLeaveCard = (index, themeState) => {
        const themeConfig = this.onGetThemeConfig(themeState);        

        const updatedThemeConfig = {
            ...themeConfig[index],
            showPrevBtn: false
        };
        themeConfig[index] = updatedThemeConfig;

        this.onUpdateThemesState(themeState, themeConfig);
    }

    onUpdateThemesState = (state, config) => {
        this.setState({
            [state]: config
        })
    };

    onGetThemeConfig = (themeState) => [ ...this.state[themeState] ];

    render() {

        let themeHolders = null;
        if (config.themeHolders && this.state.latestThemes && this.state.popularThemes) {
            themeHolders = config.themeHolders.map((themeHolder, index) => (
                <ThemesHolder key={index+1}
                    themes={this.state[themeHolder.themeState]} 
                    themeHolder={themeHolder}
                    mouseIn={this.onMouseEnterCard}
                    mouseOut={this.onMouseLeaveCard} />
            ))
        }

        return (
            <main id="main">
                <Banner />
                <section className={styles.Themes}>
                    <Container>
                        {themeHolders}
                    </Container>
                </section>
            </main>
        )
    }
}

export default Themes;
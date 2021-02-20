import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ThemesHolder from './ThemesHolder/ThemesHolder';
import Banner from '../Banner/Banner';
import moment from 'moment';

import styles from './Themes.module.css';

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
        let latestThemes = [
            ...this.props.themes
        ];
        latestThemes.sort((a,b) => {
            if (moment(a.added_at).isBefore(b.added_at)) {
                return 1;
            } else {
                if (moment(a.added_at).isAfter(b.added_at)) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });

        const mostLatestThemes = latestThemes.slice(0, 2);
        const updatedLatestThemes = latestThemes.splice(2, latestThemes.length);

        const popularThemes = [
            ...updatedLatestThemes
        ];
        popularThemes.sort((a,b) => {
            if (b.rating > a.rating) {
                return 1;
            } else {
                if (a.rating > b.rating) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });

        this.setState({
            latestThemes: mostLatestThemes,
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
        return (
            <main id="main">
                <Banner />
                <section className={styles.Themes}>
                    <Container>
                        <ThemesHolder themes={this.state.latestThemes} 
                            title="Latest"
                            themeState="latestThemes"
                            shortDesc="Most recently added to our collection."
                            showViewAll={true}
                            mouseIn={this.onMouseEnterCard}
                            mouseOut={this.onMouseLeaveCard} />
                        <ThemesHolder themes={this.state.popularThemes} 
                            title="Popular"
                            themeState="popularThemes"
                            shortDesc="Top-sellers in the past week!"
                            showViewAll={false}                            
                            mouseIn={this.onMouseEnterCard}
                            mouseOut={this.onMouseLeaveCard} />
                    </Container>
                </section>
            </main>
        )
    }
}

export default Themes;
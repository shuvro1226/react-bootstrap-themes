import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import ThemesHolder from './ThemesHolder/ThemesHolder';
import Banner from '../Banner/Banner';

import styles from './Themes.module.css';

import { config } from '../../config/config';
import * as actions from '../../store/actions/index';

class Themes extends Component {    

    // To do actions when a mouse cursor comes over the theme card
    onMouseEnterCard = (index, themeState) => {
        this.props.onToggleLivePreview(index, themeState, true);
    }

    // To do actions when a mouse cursor leaves the theme card
    onMouseLeaveCard = (index, themeState) => {
        this.props.onToggleLivePreview(index, themeState, false);        
    }

    render() {
        let themeHolders = null;
        if (config.themeHolders && this.props.latestThemes && this.props.popularThemes) {
            themeHolders = config.themeHolders.map((themeHolder, index) => (
                <ThemesHolder key={index+1}
                    themes={this.props[themeHolder.themeState]} 
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

const mapStateToProps = (state) => {
    return {
        latestThemes: state.latestThemes,
        popularThemes: state.popularThemes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleLivePreview: (index, themeState, toggleBtn) => dispatch(actions.toggleThemePreview(index, themeState, toggleBtn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
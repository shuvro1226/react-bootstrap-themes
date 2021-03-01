import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import ThemesHolder from './ThemesHolder/ThemesHolder';
import Banner from '../Banner/Banner';

import styles from './Themes.module.css';

import { config } from '../../config/config';
import * as actions from '../../store/actions/index';

class Themes extends Component {    

    render() {
        let themeHolders = null;
        if (config.themeHolders && this.props.latestThemes && this.props.popularThemes) {
            themeHolders = config.themeHolders.map((themeHolder, index) => (
                <ThemesHolder key={index+1}
                    themes={this.props[themeHolder.themeState]} 
                    themeHolder={themeHolder}
                    mouseIn={this.props.onToggleLivePreview}
                    mouseOut={this.props.onToggleLivePreview} />
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
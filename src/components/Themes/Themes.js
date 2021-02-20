import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ThemesHolder from './ThemesHolder/ThemesHolder';
import Banner from '../Banner/Banner';
import { themesDefaultConfig } from '../../config/themes';
import moment from 'moment';

import styles from './Themes.module.css';

class Themes extends Component {
    state = {
        themes: themesDefaultConfig
    }

    render() {
        let latestThemes = [
            ...this.state.themes
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

        latestThemes = latestThemes.slice(0, 2);

        const popularThemes = [
            ...this.state.themes
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

        return (
            <main id="main">
                <Banner />
                <section className={styles.Themes}>
                    <Container>
                        <ThemesHolder themes={latestThemes} 
                            title="Latest"
                            shortDesc="Most recently added to our collection."
                            showViewAll={true} />
                        <ThemesHolder themes={popularThemes} 
                            title="Popular"
                            shortDesc="Top-sellers in the past week!"
                            showViewAll={false} />
                    </Container>
                </section>
            </main>
        )
    }
}

export default Themes;
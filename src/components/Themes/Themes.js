import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ThemesHolder from './ThemesHolder/ThemesHolder';
import Banner from '../Banner/Banner';
import { themesDefaultConfig } from '../../config/themes';

import styles from './Themes.module.css';

class Themes extends Component {
    state = {
        themes: themesDefaultConfig
    }

    render() {
        return (
            <main id="main">
                <Banner />
                <section className={styles.Themes}>
                    <Container>
                        <ThemesHolder />
                    </Container>
                </section>
            </main>
        )
    }
}

export default Themes;
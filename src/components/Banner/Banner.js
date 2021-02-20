import React from 'react';
import { Container, Image } from 'react-bootstrap';

import styles from './Banner.module.css';

const Banner = (props) => (
    <section className={styles.Banner}>
        <Container className="text-center">
            <Image src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png" />
            <h1 className="display-1 text-bold">Build anything</h1>
            <h5 className="text-gray-soft text-regular">Themes built by or reviewed by Bootstrap's creators.</h5>
            <a className="btn btn-brand btn-lg mb-5 mb-lg-2" href="#official-themes">Why our themes?</a>
        </Container>
    </section>
)

export default Banner;
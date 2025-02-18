import React from 'react';
import { Container, Image } from 'react-bootstrap';

import { config } from '../../config/config';
import styles from './Banner.module.css';
import BootstrapIcon from '../../assets/img/bootstrap-stack.png';

const Banner = (props) => (
    <section className={styles.Banner}>
        <Container className="text-center">
            <Image src={BootstrapIcon} />
            <h1>{config.banner.title}</h1>
            <h5 className="text-gray-soft text-regular">{config.banner.subTitle}</h5>
            <a className="btn btn-brand btn-lg mb-5 mb-lg-2" href={"#" + config.banner.bannerLink.link}>
                {config.banner.bannerLink.displayText}
            </a>
        </Container>
    </section>
)

export default Banner;
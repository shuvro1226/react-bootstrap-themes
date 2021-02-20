import React from 'react';
import Theme from './Theme/Theme';
import { Row, Col } from 'react-bootstrap';

import styles from './ThemesHolder.module.css';

const ThemesHolder = (props) => {
    let viewAllBtn = null;
    if (props.showViewAll) {
        viewAllBtn = <a className="btn btn-outline-brand btn-sm" href="#view-all">View all</a>
    }

    let themeCards = null;
    if (props.themes) {
        themeCards = props.themes.map((theme, index) => {
            return <Col as="li" className="col-6" key={index + 1}>
                <Theme theme={theme} />
            </Col>;
        });
    }

    return (
        <div className={styles.ThemesHolder}>
            <div className={styles.ThemesCardHeading}>
                <div>
                    <h5 className={styles.ThemeCardsTitle}>{props.title}</h5>
                    <p className="text-gray-soft">{props.shortDesc}</p>
                </div>
                {viewAllBtn}
            </div>
            <Row as="ul">
                {themeCards}
            </Row>
            <a className="btn btn-brand btn-block d-md-none" href="#view-all-latest">View all latest themes</a>
        </div>
    )
}

export default ThemesHolder;
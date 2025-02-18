import React from 'react';
import Theme from './Theme/Theme';
import { Row, Col } from 'react-bootstrap';

import styles from './ThemesHolder.module.css';

const ThemesHolder = (props) => {
    let viewAllBtn = null;
    if (props.themeHolder.showViewAll) {
        viewAllBtn = <a className="btn btn-outline-brand btn-sm d-none d-md-block" href="#view-all">View all</a>
    }

    let viewAllLatestBtn = null;
    if (props.themeHolder.type === 'Latest') {
        viewAllLatestBtn = <a className="btn btn-brand d-block d-md-none" href="#view-all-latest">View all latest themes</a>
    }

    let themeCards = null;
    if (props.themes) {
        themeCards = props.themes.reduce((themes, theme, index) => {
            if (theme.visible) {
                const themeCard = <Col as="li" className="col-6" key={index + 1}>
                    <Theme theme={theme}
                        mouseIn={() => props.mouseIn(index, props.themeHolder.themeState)}
                        mouseOut={() => props.mouseOut(index, props.themeHolder.themeState)} />
                </Col>;
                themes.push(themeCard);
            }
            return themes;
        }, []);
    }

    let themeCardsHolder = <Col><p>No <b>{props.themeHolder.type}</b> themes are found under applied filter.</p></Col>
    if (themeCards && themeCards.length > 0) {
        themeCardsHolder = themeCards;
    }

    return (
        <div className={styles.ThemesHolder}>
            <div className={styles.ThemesCardHeading}>
                <div className="d-block">
                    <h5 className={styles.ThemeCardsTitle}>{props.themeHolder.type}</h5>
                    <p className="text-gray-soft">{props.themeHolder.description}</p>
                </div>
                {viewAllBtn}
            </div>
            <Row as="ul">
                {themeCardsHolder}
            </Row>
            {viewAllLatestBtn}
        </div>
    )
}

export default ThemesHolder;
import React, { Component } from 'react';
import Theme from './Theme/Theme';
import { Row, Col } from 'react-bootstrap';

import styles from './ThemesHolder.module.css';

class ThemesHolder extends Component {
    render() {
        return (
            <div className={styles.ThemesHolder}>
                <div className={styles.ThemesCardHeading}>
                    <div>
                        <h5 className={styles.ThemeCardsTitle}>Latest</h5>
                        <p className="text-gray-soft">Most recently added to our collection.</p>
                    </div>
                    <a className="btn btn-outline-brand btn-sm" href="#view-all">View all</a>
                </div>
                <Row as="ul">
                    <Col as="li" className="col-6">
                        <Theme />
                    </Col>
                    <Col as="li" className="col-6">
                        <Theme />
                    </Col>
                </Row>
                <a className="btn btn-brand btn-block d-md-none" href="#view-all-latest">View all latest themes</a>
            </div>
        )
    }
}

export default ThemesHolder;
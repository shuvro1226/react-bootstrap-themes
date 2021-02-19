import React from 'react';
import { Container } from 'react-bootstrap';

import styles from './Footer.module.css';

const Footer = (props) => {
    const footerItemsStyles = [
        'd-lg-flex', 
        'justify-content-lg-between', 
        'align-items-lg-center',
        styles.FooterItem
    ];

    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.FooterInner}>
                    <div className={styles.FooterItem}>
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div className="form-group">
                                <h5 className="mb-1">Get new themes in your inbox!</h5>
                                <div className="form-text mt-0">New themes or big discounts. Never spam.</div>
                            </div>
                            <div id="signup_footer" className="d-flex align-items-start">
                                <div className="form-group w-100 mr-2">
                                    <input className="form-control form-control--muted" name="EMAIL" type="email" aria-describedby="footerEmail" placeholder="Email address" />
                                </div>
                                <input className="btn btn-brand" type="submit" value="Subscribe" name="subscibe" />
                            </div>
                        </div>
                    </div>
                    <div className={footerItemsStyles.join(" ")}>
                        <ul id="menu-seller-footer" className={styles.FooterNav}>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1333">
                                <a title="Help Center" href="#help">Help Center</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1335">
                                <a title="Terms of Service" href="#terms">Terms of Service</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1334">
                                <a title="Licenses" href="#licenses">Licenses</a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49443">
                                <a title="Sell Themes" href="#sell">Sell Themes</a>
                            </li>
                        </ul>                        
                        <p className="hidden-sm-down d-none d-lg-block">Trying to redownload a theme? Use our <a href="#redownload">redownload page.</a></p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
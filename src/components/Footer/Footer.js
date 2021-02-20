import React from 'react';
import { Container, Button } from 'react-bootstrap';

import styles from './Footer.module.css';

const Footer = (props) => {
    const footerItemsStyles = [
        'd-lg-flex', 
        'justify-content-lg-between', 
        'align-items-lg-center',
        styles.FooterItem
    ];

    const footerFormGroupStyles = [
        'form-group',
        styles.FooterFormGroup
    ];

    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.FooterInner}>
                    <div className={styles.FooterItem}>
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div className={footerFormGroupStyles.join(" ")}>
                                <h5 className="mb-1">Get new themes in your inbox!</h5>
                                <div className="form-text mt-0">New themes or big discounts. Never spam.</div>
                            </div>
                            <div id="signup_footer" className="d-flex align-items-start">
                                <div className={footerFormGroupStyles.join(" ") + " w-100 mr-2"}>
                                    <input className="form-control form-control--muted" name="EMAIL" type="email" aria-describedby="footerEmail" placeholder="Email address" />
                                </div>
                                <Button className="btn btn-brand" type="submit" value="Subscribe" name="subscibe">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <div className={footerItemsStyles.join(" ")}>
                        <ul className={styles.FooterNav}>
                            <li>
                                <a title="Help Center" href="#help">Help Center</a>
                            </li>
                            <li>
                                <a title="Terms of Service" href="#terms">Terms of Service</a>
                            </li>
                            <li>
                                <a title="Licenses" href="#licenses">Licenses</a>
                            </li>
                            <li>
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
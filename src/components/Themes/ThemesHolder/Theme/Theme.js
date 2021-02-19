import React from 'react';
import { Image, Card } from 'react-bootstrap';

import styles from './Theme.module.css';

const Theme = (props) => {
    const ratingItemStyles = [
        styles.RatingItem,
        styles.RatingItemActive,
        'text-right'
    ];

    return (
        <Card className={styles.Card}>
            <Card.Body className={styles.CardBody}>
                <Card.Text>
                    <Card.Link href="https://themes.getbootstrap.com/product/folio-creative-agency-portfolio-theme/">
                        <Image src="https://themes.getbootstrap.com/wp-content/uploads/2021/02/screenshot-540x405.jpg" />
                    </Card.Link>

                    <Card.Link className="btn btn-brand btn-sm" href="https://themes.getbootstrap.com/preview/?theme_id=67593">
                        Live preview
                    </Card.Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.CardFooter}>
                <div className={styles.CardFooterItem}>
                    <Card.Link className={styles.CardTitle} href="https://themes.getbootstrap.com/product/folio-creative-agency-portfolio-theme/">
                        Folio – Creative Agency Portfolio Theme
                    </Card.Link>
                    <ul className={styles.CategoriesList}>
                        <li>
                            <Card.Link className="d-block" href="https://themes.getbootstrap.com/product-category/landing-corporate/">
                                Landing &amp; Corporate
                            </Card.Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.CardFooterItem}>
                    <p className="text-right">
                        <span className="amount">
                            <span className="woocommerce-Price-currencySymbol">$</span>
                            59.00
                        </span>
                    </p>
                    <ul className={styles.Rating}>
                        <li className={ratingItemStyles.join(" ")}>&#9734;</li>
                        <li className={ratingItemStyles.join(" ")}>&#9734;</li>
                        <li className={ratingItemStyles.join(" ")}>&#9734;</li>
                        <li className={ratingItemStyles.join(" ")}>&#9734;</li>
                        <li className={ratingItemStyles.join(" ")}>&#9734;</li>            
                    </ul>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Theme;
import React from 'react';
import { Image, Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

import * as themeImage from '../../../../assets/img/themes/themes';
import styles from './Theme.module.css';

const Theme = (props) => {

    let livePreviewClasses = "btn btn-brand btn-sm live-preview";
    if (!props.theme.showPrevBtn) {
        livePreviewClasses += " d-none";
    }

    return (
        <Card className={styles.Card}>
            <Card.Body className={styles.CardBody}
                onMouseOver={props.mouseIn}
                onMouseOut={props.mouseOut}>
                <Card.Text>
                    <Card.Link href="#">
                        <Image src={themeImage[props.theme.image_path]} />
                    </Card.Link>

                    <Card.Link className={livePreviewClasses} href="#">
                        Live preview
                    </Card.Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.CardFooter}>
                <div className={styles.CardFooterItem}>
                    <Card.Link className={styles.CardTitle} href="#">
                        {props.theme.name} – {props.theme.description}
                    </Card.Link>
                    <ul className={styles.CategoriesList}>
                        <li>
                            <Card.Link className="d-block" href="#">
                                {props.theme.category}
                            </Card.Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.CardFooterItem}>
                    <p>
                        <span className="amount">
                            <span>{props.theme.currency}</span>
                            {props.theme.price.toFixed(2)}
                        </span>
                    </p>
                    <ReactStars
                        classNames={styles.Rating}
                        count={5}
                        value={props.theme.rating}
                        size={18}
                        activeColor="#F7DE45"
                        isHalf={true}
                    />
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Theme;
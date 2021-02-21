import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';

import { config } from '../../config/config';

import styles from './Navigationbar.module.css';

class NavigationBar extends Component {   

    render() {
        const formNavClasses = [
            "my-2", 
            "my-lg-0",
            "order-2",
            styles.FormNavBar
        ];

        let categoriesList = null;
        if (config.categories) {
            categoriesList = config.categories.map((category, index) => (
                <NavDropdown.Item 
                    key={index+1}
                    className={styles.NavDropdownItem} 
                    onClick={() => this.props.filterByCategories(category.displayText)} 
                    href={"#" + category.value}>
                    {category.displayText}
                </NavDropdown.Item>
            ));
        }
        
        return (
            <Navbar expand="lg" className={styles.NavBar}>
                <Container>
                    <Navbar.Brand className={styles.NavBarBrand} onClick={() => this.props.filterByCategories('')} href="#home">Bootstrap Themes</Navbar.Brand>
                    <Navbar.Toggle className={styles.NavBarToggler} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="navbar-collapse">
                        <Form className={formNavClasses.join(" ")} inline>
                            <FormControl type="text" placeholder="Search" value={this.props.searchText} onChange={(event) => this.props.searchThemes(event)} />
                        </Form>
                        <Nav className="mr-auto order-1">
                            <NavDropdown title="Categories" className={styles.NavLink}>
                                {categoriesList}
                            </NavDropdown>
                            <Nav.Link href="#why-us" className={styles.NavLink}>Why Our Themes?</Nav.Link>
                            <Nav.Link href="#the-guide" className={styles.NavLink}>The Guide</Nav.Link>                            
                        </Nav>
                        <Nav className="ml-2 d-none d-lg-flex order-3">                            
                            <Nav.Link className={styles.NavLink} href="#sign-in">Sign in</Nav.Link>
                            <Nav.Link className={styles.NavLink} href="#sign-up">Sign up</Nav.Link>                            
                        </Nav>              
                        <Nav className="d-lg-none">      
                            <NavDropdown.Divider />                      
                            <Nav.Link className={styles.NavLink} href="#sign-in">Sign in</Nav.Link>
                            <Nav.Link className={styles.NavLink} href="#sign-up">Sign up</Nav.Link>                            
                        </Nav>          
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;
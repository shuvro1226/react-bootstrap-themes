import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';

import styles from './Navigationbar.module.css';

class NavigationBar extends Component {   

    render() {
        const formNavClasses = [
            "my-2", 
            "my-lg-0",
            styles.FormNavBar
        ];
        return (
            <Navbar expand="lg" className={styles.NavBar}>
                <Container>
                    <Navbar.Brand className={styles.NavBarBrand} href="#home">Bootstrap Themes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Categories" id="basic-nav-dropdown" className={styles.NavLink}>
                                <NavDropdown.Item href="#admin-and-dashboard">Admin & Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="#landing-and-corporate">Landing & Corporate</NavDropdown.Item>
                                <NavDropdown.Item href="#application">Application</NavDropdown.Item>
                                <NavDropdown.Item href="#e-commerce-and-retail">E-Commerce & Retail</NavDropdown.Item>
                                <NavDropdown.Item href="#portfolio-and-blog">Portfolio & Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#speciality">Speciality</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#why-us" className={styles.NavLink}>Why Our Themes?</Nav.Link>
                            <Nav.Link href="#the-guide" className={styles.NavLink}>The Guide</Nav.Link>                            
                        </Nav>
                        <Nav className="ml-auto">
                            <Form className={formNavClasses.join(" ")} inline>
                                <FormControl type="text" placeholder="Search" className="" onClick={this.onOpenSearchBox} />
                            </Form>
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
import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {NETWORK_ROUTE, NODE_ROUTE} from "./utils/consts";

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Узлы" id="basic-nav-dropdown">
                            <NavDropdown.Item href={NETWORK_ROUTE}>Все узлы</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#something-else">
                                что-то еще
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#something-else-more">и еще что-то</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
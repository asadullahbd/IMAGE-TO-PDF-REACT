import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MenuBar = () => {
    return (
        <>
            <Navbar className="sticky-top nav">
                <Container>
                    <Navbar.Brand>
                        <a href="/" className="nav-logo">Asad</a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">MeetPeople</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/accueil">Accueil</Nav.Link>
            <Nav.Link href="#">Mon Profil</Nav.Link>
            <Nav.Link href="#">Messages</Nav.Link>
            <Nav.Link href="#">Matchs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )

}

export default Header;
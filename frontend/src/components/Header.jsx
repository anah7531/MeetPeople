import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
          <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
        </svg>
          <Navbar.Brand href="/">MeetPeople</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/accueil">Accueil</Nav.Link>
            <Nav.Link href="#">Mon Profil</Nav.Link>
            <Nav.Link href="#">Messages</Nav.Link>
            <Nav.Link href="#">Matchs</Nav.Link>
            <Button color="secondary">Deconnecter</Button>
          </Nav>
        </Container>
      </Navbar>
    )

}

export default Header;
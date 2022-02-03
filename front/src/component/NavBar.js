import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'
import '../styles/NavBar.css'

function NavBarr(){
    
    return(
    <div>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">K-Cloud</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
    )
}
export default NavBarr
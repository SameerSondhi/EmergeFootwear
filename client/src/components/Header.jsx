import React from 'react'
import {Badge, Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <Navbar variant='dark' expand='lg' collapseOnSelect className='navbar'>
            <Container>
        <LinkContainer to="/">
                <Navbar.Brand>
                <Badge pill style={{fontSize:'25px'}}>Emerge Footwear</Badge>
                </Navbar.Brand>
                </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                    <LinkContainer to='/cart' className='cart-user'>
                    <Nav.Link><FaShoppingCart/>Cart
                    <Badge pill bg='success' style={{marginLeft:'5px'}}>3</Badge>
                       </Nav.Link>
                       </LinkContainer>
                       
                    <Nav.Link className='cart-user'><FaUser/>Admin
                    <Badge pill bg='success' style={{marginLeft:'5px'}}>3</Badge>
                    </Nav.Link>
                 
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
        </header>
  )
}

export default Header
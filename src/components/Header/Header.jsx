import React from 'react'
import './Header.css'
import { Navbar, Nav ,Container } from 'react-bootstrap';
import { useEffect } from 'react';

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const Header = () => {

  useEffect(() => {
    // Scroll to the Hero section on first render
    scrollToElement('Hero');
  }, []);
 return (
    <>
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><img src='bluetick-consultants.png' className='brandTag' alt='brand-icon' /></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link onClick={() => scrollToElement('Hero')}>Hero</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('WhatweOffer')}>WhatweOffer</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('Blog')}>Blog</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('Contact')}>Contact</Nav.Link>
            <Nav.Link onClick={() => scrollToElement('Footer')}>Footer</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>

 )
}

export default Header
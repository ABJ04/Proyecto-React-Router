import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className='m-2'>
            <Link className='fs-5 te text-decoration-none text-light' to="/">Home 🏡</Link>
            </div>
            <div className='m-2'>
            <Link className='fs-5 te text-decoration-none text-light' to="/Contact">Contact 📱</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div>
        <Link className='fs-5 te text-decoration-none text-light' to="/">Happy Cake 🎂</Link>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
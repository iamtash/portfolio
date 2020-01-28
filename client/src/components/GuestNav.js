import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import Login from './Login'

const GuestNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <NavLink className="nav-link" to="/"><span className="font-weight-light">Home</span></NavLink>
                <NavLink className="nav-link" to="/about"><span className="font-weight-light">About</span></NavLink>
                <NavLink className="nav-link" to="/projects"><span className="font-weight-light">Projects</span></NavLink>
            </Nav>
            <Login />
        </Navbar>
    )
}

export default GuestNav
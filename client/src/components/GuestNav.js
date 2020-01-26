import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import Login from './Login'

const GuestNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </Nav>
            <Login />
        </Navbar>
    )
}

export default GuestNav
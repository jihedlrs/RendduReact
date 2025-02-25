import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "../assets/Navbarr.css"; 

const Navbarr = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
 
          <Nav className="me-auto">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Events
            </NavLink>
            
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              login
            </NavLink>


            <NavLink
              to="/ajout"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              AjouterEvent
            </NavLink>
          </Nav>
    
      </Container>
    </Navbar>
  );
};

export default Navbarr;

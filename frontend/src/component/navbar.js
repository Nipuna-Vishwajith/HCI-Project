import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
//# for scrollink
// / for routing
const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
  <ReactBootStrap.Navbar.Brand >&nbsp;<FaBuilding /> IMS Institute</ReactBootStrap.Navbar.Brand> 
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/">
    <ReactBootStrap.Nav.Link href="/" style={{ marginRight: '15px' }}>Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/timetable">
    <ReactBootStrap.Nav.Link href="/timetable" style={{ marginRight: '15px' }}>Timetable</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Class" id="collasible-nav-dropdown" style={{ marginRight: '15px' }}>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/teachersInfo">
    <ReactBootStrap.Nav.Link href="#teachersInfo" style={{ marginRight: '15px' }}>Teacher Info</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/student">
    <ReactBootStrap.Nav.Link eventKey={2} href="#student">
        Add a student
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
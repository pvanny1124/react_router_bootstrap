import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";

import "./CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Midas </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Nav>
          <Search />
        </Nav>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              Profile
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              Settings
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;

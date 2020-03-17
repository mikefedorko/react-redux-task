import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { NavConfig } from '../config/nav-config';

import logo from '../assets/logo.svg';

export const NavigationBar = () => {
  return (
    <>
      <Navbar sticky="top" variant="dark" bg="dark" className="navbar">
        <Nav>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {NavConfig.map(item => (
            <NavLink
              exact
              className="nav-links"
              to={item.path}
              key={item.name}
              activeStyle={{
                color: '#41e0fd',
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Nav>
      </Navbar>
    </>
  );
};

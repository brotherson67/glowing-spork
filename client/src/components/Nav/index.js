import React from 'react';
import { Nav, Bars, NavMenu, NavLink, NavBtn } from './NavbarEl';

const  Navbar = ({ toggle }) => {

  return (
  <>
  <Nav>
      <NavLink to="/">
          <h1>R-o-u-t-e-s</h1>
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        <NavLink to="/ski">
            Ski
        </NavLink>
        <NavLink to="/mountain-bike">
            Mountain bike
        </NavLink>
        <NavLink to="/trail-run">
            Trail Run
        </NavLink>
        <NavLink to="/social">
            Social Feed
        </NavLink>
        <NavLink to="/chat">
            Chat
        </NavLink>
        <NavLink to="/cards">
            Find Friends!
        </NavLink>
      </NavMenu>
      {/* <NavBtn>
          <Button to='/login' primary='true'>
              Login
          </Button>
      </NavBtn> */}
  </Nav>
  </>
    );
}


export default Navbar;
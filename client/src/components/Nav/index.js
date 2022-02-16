import React from 'react';
import { Nav, Bars, NavMenu, NavLink, NavBtn } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import "./nav.css";

const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <div className="navbar-div">
                    <h2>R-o-u-t-e-s</h2>
                    </div>
                    
                </NavLink>
                <NavLink to="/login">Login</NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to="/social">
                        Social Feed
                    </NavLink>
                    <NavLink to="/friends">
                        Find Friends!
                    </NavLink>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                    <Dropdown>
                        <Dropdown.Toggle >Activities</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <NavLink to="/ski">
                                    Ski
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/mountain-bike">
                                    Mountain bike
                                </NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to="/trail-run">
                                    Trail Run
                                </NavLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>




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
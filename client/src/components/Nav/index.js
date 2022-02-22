import React from 'react';
import Auth from '../../utils/auth';
import { Nav, Bars, NavMenu, NavLink, NavBtn } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import "./nav.css";

const Navbar = ({ toggle }) => {
    const loggedIn = Auth.loggedIn();
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <div className="navbar-div">
                        <h2>R-o-u-t-e-s</h2>
                    </div>
                </NavLink>
                <Bars onClick={toggle} />
                <nav className="text-center">
                    <NavMenu>
                        {Auth.loggedIn() ? (
                            <>
                                <Bars onClick={toggle} />
                                
                                <NavLink to="/social">
                                    Social Feed
                                </NavLink>
                                <NavLink to="/friends">
                                    Find Friends!
                                </NavLink>
                        
                                <NavLink to="/chat">
                                    Chat
                                </NavLink>
                                <a href="/" onClick={logout}>
                                    Logout
                                </a>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login">Login</NavLink>
                            </>
                        )}
                        <Dropdown>
                            <Dropdown.Toggle className='drop-btn'>Activities</Dropdown.Toggle>
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
                                <Dropdown.Item>
                                    <NavLink to="/strava">
                                        Strava Data
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavMenu>
                </nav>

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
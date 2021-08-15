import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

import {BiCoinStack} from "react-icons/bi"

import { useHistory } from "react-router-dom";



const Header = ({getToken,setAuth,isAuth}) => {



    return (
     <div className='App tc f3'>
        <Navbar bg='light' expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href="/">DB Kudos Emoji</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">My Profile</Nav.Link>

            </Nav>

       
            <Nav className="ms-auto">

             <Nav.Link>My Kudos
              {isAuth ? (<span> :{getToken().kudos}<BiCoinStack size={25} /></span>) : (null)}
                
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          </div>
    );
}

export default Header;
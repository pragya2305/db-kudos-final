import React,{useState,useEffect} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import {BiCoinStack} from "react-icons/bi"
import { MDBIcon } from "mdbreact";
import { useHistory } from "react-router-dom";


const Header = ({search,setSearch,products,getToken,setAuth,isAuth,handleShowLogin}) => {
  
  const history = useHistory();
  const handleLogout = () => {
    setAuth(false);
  }

  const handleLogin = () => {
    if (isAuth) {
      history.push("/cart")
    }
    else {
      handleShowLogin();
    }
  }

   


  return (
    <div>
        
      <Navbar bg='light' expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href="/">DB Kudos Emoji</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ? (<Nav.Link href="/profile">My Profile</Nav.Link>) : (null)}
            
               
          </Nav>
         
          <Form className="d-flex" style={{ marginLeft: '5%', width: '50%' }}>

            <FormControl
              type="search"
              placeholder="Search DB Kudos Emoji"
              className="mr-2"
              aria-label="Search"
              className="input"
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
            />
          </Form>
         
          <Nav className="ms-auto">
              
            <Nav.Link>My Kudos
              {isAuth ? (<span>:{getToken().kudos}<BiCoinStack size={25} /></span>) : (null)}
                
            </Nav.Link>
            <Nav.Link onClick={handleLogin}><FaShoppingCart size={25} /></Nav.Link>
            {isAuth ?
              (<Nav.Link onClick={handleLogout}>Logout</Nav.Link>) :
              (<Nav.Link href="/login">Login</Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

                              
    </div>
  );
}

export default Header;

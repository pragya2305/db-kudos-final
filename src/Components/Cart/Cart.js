import React, { useState, useEffect } from 'react'
import { Modal, Button , Navbar,Nav} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MdAddCircle } from 'react-icons/md';
import { AiFillMinusCircle } from 'react-icons/ai';
import { MDBIcon } from "mdbreact";
import axios from "axios";
import {BiCoinStack} from "react-icons/bi"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Cart = ({ setToken,cartItems, onAdd, onRemove,getToken,isAuth,setCartItems, onDelete, totalPrice }) => {
  
  const classes = useStyles();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showBuy, setShowBuy] = useState(false);
    const handleCloseBuy = () => setShowBuy(false);
  const handleShowBuy = () => {
    console.log("shopped")
    setShowBuy(true);
    
  }
  
    const buyBadges = () => {
        if (totalPrice > getToken().kudos) {
            handleShow();
        }
        else {
            //deduct kudos and update backend and empty cart
          const badgesArray = []

          for (let i = 0; i < cartItems.length; i++) {
            badgesArray.push(cartItems[i].id)
         }

          console.log("BadgesArray", badgesArray);


          axios
      .post("http://localhost:8081/home/cart", 
        {

    "email_id" : getToken().email,
    "kudos_cost" : totalPrice,
    "badge_id": badgesArray
    
      })
      .then((response) => {
        console.log(response.data);
      });

      setToken({ 'email': getToken().email, 'password': "password", 'kudos': getToken().kudos-totalPrice});
          setCartItems([]);
          console.log("after post",getToken().email)
          handleShowBuy();
          
          
          //has to be cleared after updated in backend must be placed in useEffect
          localStorage.setItem("cartLocalStore", JSON.stringify([]));
          localStorage.setItem("totalPriceLocalStore", 0);
        }
  }

  useEffect(() => {
    console.log("cart rendered", cartItems);
  }, [])
  
  

    function FormCheckoutList() {
      return (
        <React.Fragment>
          {cartItems.map(item => {
            return (
                      

              <Grid item xs={6}>
                
                <Paper className={classes.paper}>
                  <div key={item.id} >
                   
                      <img style={{ width: '18%', height: '25%', marginLeft:"5%",float:"left"}} src={item.img} />
                     <h4>{item.title}</h4>
                     <p>Kudos: {item.points}<BiCoinStack size={25}/></p>
                                       
                    <p><h7 style={{fontWeight:"medium"}}>Quantity:</h7>
                      
                      <span  style={{padding:'1%'}} ><Button onClick={() => onRemove(item)} size="sm" variant="secondary"><AiFillMinusCircle size={25} className="quantityIcons"/></Button></span>
                      { item.qty}
                      <span style={{ padding: '1%' }} ><Button onClick={() => onAdd(item)} size="sm" variant="secondary"><MdAddCircle size={25}/></Button></span>
                      </p>
                                           
                    <Button variant="outline-success" onClick={()=>onDelete(item)} >Delete</Button>
                 
               
                    
                  </div>
          
                </Paper>
          
              </Grid>
                
                                
                          
            );
          })}


        </React.Fragment>
      );
    }



  return (
    <div>
          
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sorry!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You Don't have sufficient Kudos</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          
      <Modal show={showBuy} onHide={handleCloseBuy}>
        <Modal.Body>Thank you for shopping!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBuy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          <Navbar bg='light' expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href="/">DB Kudos Emoji</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">My Profile</Nav.Link>
              
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link>My Kudos: {isAuth ? (<span>: { getToken().kudos }<BiCoinStack size={25}/></span>) : (null)}</Nav.Link>
            {cartItems.length ? (<Nav.Link ><Button onClick={buyBadges} size="sm">Checkout</Button></Nav.Link>) : (null)}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      

         <h2 style={{marginLeft:"45%", fontFamily:"cursive", marginBottom:"1%",marginTop:"1%"}}>Your Cart</h2>
      {cartItems.length ? (<div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
                    <FormCheckoutList />
                </Grid>
          
        </Grid>
        <div style={{marginLeft:"30%", marginTop:'3%'}}>
        <h5 style={{  marginLeft:"22%"}}>Total Kudos: {totalPrice}<BiCoinStack size={25}/></h5>
        <Button onClick={buyBadges} style={{ marginLeft:"24%"}} variant="primary" size="lg">Checkout</Button>
          
          </div>
      </div>) :
        (<div style={{marginTop:'15%',marginLeft:"40%", fontSize:"250%"}}>Your Cart is Empty</div>)}
    </div>
  );
}

export default Cart

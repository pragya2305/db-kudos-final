import React,{useEffect,useState} from 'react'
import Login from './Components/Login/Login.js';
import './App.css';
import { Modal,Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route ,Switch, Link} from 'react-router-dom';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import 'react-notifications/lib/notifications.css';
import Profile from './Components/Profile/Profile';
import data from './data'


function App() {


  const [isAuth, setAuth] = useState(false);
  const [badgeId, setBadgeId] = useState([1,2]);
  const [badgeCount, setBadgeCount] = useState([]);
  

  function setToken(userToken) {
    console.log("lol1");
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  function getToken() {
      console.log("lol");
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken
    }

 

  const [user, setUser] = useState({
    email: "start@gmail.com",
    name: "start",
    kudos: 0,
    badgesCount: [],
    badgesId:[],
    position: "something",
    department: "something",
    contact: "9999999999"
  });

  
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    
  }

  const [showWarning, setShowWarning] = useState(false);
  const handleCloseWarning = () => setShowWarning(false);
  const handleShowWarning = () => {
    setShowWarning(true);
    
  }

  const { products } = data;

  const [totalPrice, setTotalPrice] = useState(0);

  
  const [cartItems, setCartItems] = useState([]);
  

  //On page refresh take items of cart from local storage
  useEffect(() => {

    if(localStorage.getItem("cartLocalStore")==null)
    {
        localStorage.setItem("cartLocalStore",JSON.stringify([]));
        localStorage.setItem("totalPriceLocalStore",0);
    }
    setCartItems(JSON.parse(localStorage.getItem("cartLocalStore")))//have to check for other users
    setTotalPrice(parseInt(localStorage.getItem("totalPriceLocalStore", totalPrice)));



  }, [])

  useEffect(()=>{
      console.log("token",getToken())
      if(getToken() && getToken().email)
          {
        setUser(
              setUser(
         prevState => ({
              ...prevState,
             kudos:getToken().kudos,
            email:getToken().email
            })
      )
            )
            setAuth(true);
          }
      else
        setAuth(false);
      
    },[])


  const onAdd = (product) => {
    console.log("onAdd", product)
    //setAuth(false);
    console.log(isAuth);
    if (!isAuth) {
      handleShowLogin();
    }
    else {

      const exist = cartItems.find(x => x.id === product.id);
      if (exist) {
      
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      

    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      
      const currentTotalPrice = totalPrice;
      setTotalPrice(currentTotalPrice + product.points);
      localStorage.setItem("totalPriceLocalStore", totalPrice);

      localStorage.setItem("cartLocalStore", JSON.stringify(cartItems));
      //}
    
    }

  

  };


  const onRemove = (product) => {
    console.log("onRemove",product)
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    const currentTotalPrice = totalPrice;
    setTotalPrice(currentTotalPrice - product.points);
    localStorage.setItem("totalPriceLocalStore", totalPrice);

    localStorage.setItem("cartLocalStore", JSON.stringify(cartItems));
  };

  const onDelete = (product) => {
    console.log("onDelete", product);

    const currentTotalPrice = totalPrice;
    setTotalPrice(currentTotalPrice - (product.points*product.qty));
    localStorage.setItem("totalPriceLocalStore", totalPrice);

    setCartItems(cartItems.filter((x) => x.id !== product.id));
    localStorage.setItem("cartLocalStore", JSON.stringify(cartItems));
  };

 

  
  return (
    <div>
    <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login before adding badges to your cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
          <a href="/login"><Button variant="primary">
            Login
          </Button></a>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={showWarning} onHide={handleCloseWarning}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>You don't have sufficient kudos to buy this badge</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseWarning}>
            OK
          </Button>
         
        </Modal.Footer>
      </Modal> */}
   
    <Router>
      <Switch>
        <Route exact path='/'>
          <Product
              products={products} onAdd={onAdd}
              getToken={getToken}
              setAuth={setAuth}
              isAuth={isAuth}
              handleShowLogin={handleShowLogin}
              badgeId={badgeId}
              badgeCount={badgeCount}
              setBadgeCount={setBadgeCount}
              setBadgeId={setBadgeId}
          />
          
        </Route>
        
        <Route path='/login'>
        <Login setToken={setToken} setAuth={setAuth}
              user={user}
              setUser={setUser}
              badgeId={badgeId}
              badgeCount={badgeCount}
              setBadgeId={setBadgeId}
              setBadgeCount={setBadgeCount}
            />
        </Route>

        <Route path='/profile'>
            <Profile
              getToken={getToken}
              products={products}
              setAuth={setAuth}
              isAuth={isAuth}
              badgeId={badgeId}
              badgeCount={badgeCount}
              setBadgeCount={setBadgeCount}
              setBadgeId={setBadgeId}
            />
        </Route>

        <Route exact path='/cart'>
          <Cart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
              getToken={getToken}
              isAuth={isAuth}
            setCartItems={setCartItems}
              onDelete={onDelete}
              totalPrice={totalPrice}
              setUser={setUser}
              setToken={setToken}
          />
        </Route>

     </Switch>
   </Router>

  </div>
     

  );
}

export default App;
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
//import "react-sweet-progress/lib/style.css";
import "./Login.css"
import dbImage from "../../images/logo.png"
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';


const loginUrl = "http://localhost:8081/home/";

const Login=({token,setToken,setAuth,user,setUser,badgeId,badgeCount,setBadgeId,setBadgeCount})=>{
  //const [token,setToken]=useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

   const history = useHistory();
 
 
  useEffect(() => {
    console.log("testing badge",badgeCount)
  }, [badgeCount])


  function handleSubmit(event) {

    event.preventDefault();
    const dataF = new FormData();

    dataF.append('email', email);
    dataF.append('password', password);
    
    
    Axios.get(loginUrl+email).then((response) => {
      console.log("loginData", response.data)
      setToken({ 'email': email, 'password': password, 'kudos': response.data.kp});
      setAuth(true);
      setBadgeCount(response.data.badge_count);
      
      
    });
      
      
 
    history.push("/");
    
  }

  
    return (
      
      <div class="login-page">
          <div class="form">
            <section>
              <img src={dbImage} style={{ width: '65%', height: '65%' }} />
              <span><h4 style={{ fontWeight:"bolder"}}>DB Kudos</h4></span>
            </section>
    <form class="login-form" onSubmit={handleSubmit}>
      <input autoFocus
            type="email"
            value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" />
      <input type="password"
            value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" />
       <div>
        {errMessage && <div style={{color:"red",textAlign:"center",margin:"10px"}}>{errMessage}</div>}

        
<Button block size="lg" type="submit"variant="dark" >
          Login
  </Button>
        </div>
    </form>
  </div>
</div>
     
    );
  
  }
  
Login.propTypes = {
  setToken: PropTypes.func.isRequired
  }
  
export default Login;
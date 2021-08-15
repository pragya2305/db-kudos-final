import React, { Component } from 'react'
import contact from '../../images/contactlogo.png';
import mailme from '../../images/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Okay Visitor!</strong></h3>
                <h4>Feel free to reach me for anything</h4>
                <h4>Email Id: sankalp61018@gmail.com</h4>
                <a id="mail"href="https://mail.google.com"><img id="mailmelogo" src={mailme} alt="mail me"/> Click Here To Send Mail</a>
                <h4>Contant Info: 19200999394/2999839902</h4>

                
                
                        <a href="https://www.facebook.com">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact

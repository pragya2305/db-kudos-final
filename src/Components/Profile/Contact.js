import React, { Component } from 'react'
import contact from '../.././images/contactlogo.png';
import mailme from '../.././images/mailmeimg.png';

  


const Contact = ({profileDetails}) => {
    return (
        <section className="container-1" id="contact">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Okay Visitor!</strong></h3>
                <h4>Feel free to reach me for anything</h4>
                <h4>Email Id: {profileDetails.email_id}</h4>
                <a id="mail"href="https://mail.google.com"><img id="mailmelogo" src={mailme} alt="mail me"/> Click Here To Send Mail</a>
            </section>
    )
}

export default Contact

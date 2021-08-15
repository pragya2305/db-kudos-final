import React from 'react'
import Axios from 'axios'
import logo from '../../images/maxresdefault.jpg';
import biologo from '../.././images/biopicimg.jpg'
import './Main.css'
 


const Banner = ({profileDetails}) => {
    return (
        <section id="main">
                 <section className="container-banner">
                     <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                     <h1> Kudos! I'm {profileDetails.name}</h1>
                     <h3 id="paragarph1"> {profileDetails.position}</h3>
                     <h3 id="paragarph1"> {profileDetails.dept}</h3>
                     <button className="button">Send Kudos!</button>
                 </section>
                     <section id="container-about" className="container-about">
                     <h1>About Me</h1> 
                     <img src={biologo} width="180" height="180" alt="abtimg"/>
                     <p>{profileDetails.bio}</p>
                 </section>
             </section>
    )
}

export default Banner

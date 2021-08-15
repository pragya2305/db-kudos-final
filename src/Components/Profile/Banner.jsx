import React, { Component } from 'react'
import logo from '../../images/maxresdefault.jpg';
import './Main.css'


class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Kudos! I'm Sankalp Gupta</h1>
                    <h3 id="paragarph1"> Technology Analyst</h3>
                    <h3 id="paragarph1"> Risk Finance and Treasury, TDI</h3>
                    <h3 id="paragarph1"> Tagline: #PositiveImpact</h3>
                    <button className="button">Send Kudos!</button>
            </section>
        )
    }
}

export default Banner



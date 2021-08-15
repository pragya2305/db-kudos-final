import React, { Component } from 'react'

import badge1 from '../../images/Badge1.jpg'
import './Main.css'





class Badges extends Component {
    render() {
        return (
       
            <section className="skillheader">
                    <h1 className='Badge-h1'>My Badges</h1>
                    <section className="flex-badges-container">
                    <div><img src={badge1} width="100" height="100"/></div>
                    <div><img src={badge1} width="100" height="100"/></div>
                    <div><img src={badge1} width="100" height="100"/></div>  
                    </section>
            </section>
        )
    }
}
export default Badges

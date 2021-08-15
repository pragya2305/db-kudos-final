import React, { Component } from 'react'
import { Link} from "react-scroll";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-profile">
                <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-80}
            duration={400}
            activeStyle={{ color: 'grey' }}
                >Main</Link>
            
                <Link
            activeClass="active"
            to="container-about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={400}
            activeStyle={{ color: 'grey' }}
                >About</Link>
                
                  
                <Link
            activeClass="active"
            to="badges"
            spy={true}
            smooth={true}
            offset={-80}
            duration={400}
            activeStyle={{ color: 'grey' }}
                >Badges</Link>

                <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={400}
            activeStyle={{ color: 'grey' }}
                >Contact</Link>
                
            </nav>
        )
    }
}

export default Navbar

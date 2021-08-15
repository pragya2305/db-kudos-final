import React, { Component } from 'react'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-profile">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
                <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Badges</a>
                {/* <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Projects</a>  */}
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </nav>
        )
    }
}

export default Navbar

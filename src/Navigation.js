
import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import hamburger from './img/nav-hamburger.png';
import closedX from './img/nav-hamburger-close.png'
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  openNavClick = () => {
    this.setState({isOpen: true});
  }

  closeNavClick = () => {
    this.setState({isOpen: false});
  }

  render() {
    return ( this.state.isOpen ? (
        <div className="nav-links nav-links-active">
          <div class="navigation-images">
            <a href="index.html"><p className="nav-logo">S&J</p></a>
            <img src={closedX} alt="Navigation Hamburger" onClick={this.closeNavClick}/>
          </div>
          <div className="expanded-nav">
              <li><NavLink to="/" className="expandedNavLink" onClick={this.closeNavClick}>Home</NavLink></li>
              <li><NavLink to="/services" className="expandedNavLink" onClick={this.closeNavClick}>Services</NavLink></li>
              <li><NavLink to="/contact" className="expandedNavLink" onClick={this.closeNavClick}>Contact</NavLink></li>
          </div>
        </div>
    ) : (
        <header className="main-nav">
          <nav>
              <a href="index.html"><p className="nav-logo">S&J</p></a>
              <img src={hamburger} className="nav-image" alt="Navigation Hamburger" onClick={this.openNavClick}/>
          </nav>
        </header>
    )
    );
  }
}
 
export default Navigation;
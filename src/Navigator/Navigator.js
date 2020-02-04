import React, { Component } from 'react';
import './navigator.css'
import {Link} from 'react-router-dom'


class Navigator extends Component {
    state = {  }
    uncheck() {
      document.getElementById("tab-nav").checked = false;
    }
    render() {
        return (
<div>
    <div className="nav-container">
        <nav className="nav-checkbox">
          <a href="/" className="logo"> </a>
            <input id="tab-nav" type="checkbox" className="tab-nav"/>
              <label htmlFor="tab-nav" className="tab-nav-label"><ion-icon name="menu" className="burger-menu-icon"></ion-icon></label>
                <ul className="tab-content">
                  <Link className="link-style" to="/">
                  <li onClick={this.uncheck}> home </li>
                  </Link>
                  <Link className="link-style" to="/about">
                  <li onClick={this.uncheck}> about </li>
                  </Link>
                  <Link className="link-style" to="/contact">
                  <li onClick={this.uncheck}> contact</li>
                  </Link>
                </ul>
        </nav>
    </div> 
</div>
        );
    }
}

export default Navigator;
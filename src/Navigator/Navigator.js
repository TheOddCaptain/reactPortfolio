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
                  
                  <li onClick={this.uncheck}> <Link className="link-style" to="/"> home</Link> </li>
                  
                  
                  <li onClick={this.uncheck}> <Link className="link-style" to="/about"> about</Link> </li>
                  
                  
                  <li onClick={this.uncheck}> <Link className="link-style" to="/contact"> contact</Link></li>

                  
                  
                </ul>
        </nav>
    </div> 
</div>
        );
    }
}

export default Navigator;
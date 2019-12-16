import React, { Component } from 'react';
import './navigator.css'
import {Link} from 'react-router-dom'

class Navigator extends Component {
    state = {  }
    render() {
        return (
<div>
    <div className="nav-container">
        <nav className="nav-checkbox">
          <a href="/" className="logo"></a>
            <input id="tab-nav" type="checkbox" className="tab-nav"/>
              <label htmlFor="tab-nav" className="tab-nav-label">Menu</label>
                <ul className="tab-content">
                  <Link className="link-style" to="/">
                  <li > home </li>
                  </Link>
                  <Link className="link-style" to="/about">
                  <li > about </li>
                  </Link>
                  <Link className="link-style" to="/contact">
                  <li > contact</li>
                  </Link>
                </ul>
        </nav>
    </div> 
</div>
        );
    }
}

export default Navigator;
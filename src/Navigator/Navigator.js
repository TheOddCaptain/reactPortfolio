import React, { Component } from 'react';
import styles from './navigator.css'

class Navigator extends Component {
    state = {  }
    render() {
        return (
<div>
    <div className="nav-container">
        <nav className="nav-checkbox">
          <a href="" className="logo"></a>
            <input id="tab-nav" type="checkbox" className="tab-nav"/>
              <label for="tab-nav" className="tab-nav-label">Menu</label>
                <ul className="tab-content">
                  <li><a href=""> home </a></li>
                  <li><a href=""> who am i </a></li>
                  <li><a href=""> contact me </a></li>
                </ul>
        </nav>
    </div> 
</div>
        );
    }
}

export default Navigator;
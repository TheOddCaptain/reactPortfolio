import React, { Component } from 'react';
import './footer.css'
import {Link} from 'react-router-dom'

class Footer extends Component {
    state = {  }
    render() {
        return (
            <div className='container-footer'>
                <a href="https://www.linkedin.com/in/odd-erik-haraldsen-aa6a44b7/" target="_blank" className="link-ln" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                <Link to="/contact" className="link-contact-me"><ion-icon name="mail" ></ion-icon></Link>                
            </div>
        );
    }
}

export default Footer;
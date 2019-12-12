import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    state = {  }
    render() {
        return (
            <div className='container-footer'>
                <a href="https://www.linkedin.com/in/odd-erik-haraldsen-aa6a44b7/" target="_blank" className="link-ln"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="" className="link-contact-me"><ion-icon name="mail" ></ion-icon></a>                
            </div>
        );
    }
}

export default Footer;
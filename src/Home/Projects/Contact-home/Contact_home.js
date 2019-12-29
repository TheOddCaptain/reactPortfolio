import React, { Component } from 'react';
import './contact_home.css'
import {Link} from 'react-router-dom'

class Contact_home extends Component {
    state = {  }
    render() {
        return (
                <Link className="link-nostyle project-background" to="/contact">
                <div className="project"><p className="block-focus">Contact</p><p className="block-hover">Send me a message</p></div>
                </Link>
            
        );
    }
}

export default Contact_home;
import React, { Component } from 'react';
import './contact_home.css'
import {Link} from 'react-router-dom'

class Contact_home extends Component {
    state = {  }
    render() {
        return (
            <div className="project-background">
                <Link className="link-nostyle" to="/contact">
                <div className="project"><p className="block-focus">Contact</p><p className="block-hover">Send me a message</p></div>
                </Link>
            </div>
        );
    }
}

export default Contact_home;
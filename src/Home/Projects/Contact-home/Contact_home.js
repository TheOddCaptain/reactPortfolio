import React, { Component } from './node_modules/react';
import './contact_home.css'
import {Link} from './node_modules/react-router-dom'

class Contact_Home extends Component {
    state = {  }
    render() {
        return (
                <Link className="link-nostyle project-background" to="/contact">
                <div className="project"><p className="block-focus">Contact</p><p className="block-hover">Send me a message</p></div>
                </Link>
            
        );
    }
}

export default Contact_Home;
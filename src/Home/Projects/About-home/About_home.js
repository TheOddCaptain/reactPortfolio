import React, { Component } from './node_modules/react';
import './about_home.css'
import {Link} from './node_modules/react-router-dom'

class About_Home extends Component {
    state = {  }
    render() {
        return (
            
                <Link className="link-nostyle project-background" to="/about">
                <div className="project"> <p className="block-focus">About</p><p className="block-hover">Find out more about me</p></div>
                </Link>
            
        );
    }
}

export default About_Home;
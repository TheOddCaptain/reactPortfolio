import React, { Component } from 'react';
import './about_home.css'
import {Link} from 'react-router-dom'

class About_home extends Component {
    state = {  }
    render() {
        return (
            
                <Link className="link-nostyle project-background" to="/about">
                <div className="project"> <p className="block-focus">About</p><p className="block-hover">Find out more about me</p></div>
                </Link>
            
        );
    }
}

export default About_home;
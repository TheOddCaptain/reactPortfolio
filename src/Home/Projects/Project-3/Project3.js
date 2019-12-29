import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Project3 extends Component {
    state = {  }
    render() {
        return (
            <Link className="link-nostyle project-background" to="/about">
                <div className="project"> 
                    <p className="block-focus">Project #1</p>
                    <p className="block-hover">Project 1 description</p>
                </div>
            </Link>
        );
    }
}

export default Project3;
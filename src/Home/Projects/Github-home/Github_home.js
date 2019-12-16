import React, { Component } from 'react';
import './github_home.css'
import {Link} from 'react-router-dom'

class Github_home extends Component {
    state = {  }
    render() {
        return (
            <div className="project-background github-home">
                <a href="https://github.com/TheOddCaptain" target="_blank" className="link-nostyle">
                <div className="project "><p className="block-focus">Github</p><p className="block-hover">View my GitHub</p></div>
                </a>
            </div>
        );
    }
}

export default Github_home;
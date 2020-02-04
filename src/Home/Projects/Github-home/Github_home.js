import React, { Component } from './node_modules/react';
import './github_home.css'

class Github_Home extends Component {
    state = {  }
    render() {
        return (
                <a href="https://github.com/TheOddCaptain" target="_blank" className="link-nostyle project-background github-home" rel="noreferrer">
                <div className="project"><p className="block-focus">Github</p><p className="block-hover">View my GitHub</p></div>
                </a>

        );
    }
}

export default Github_Home;
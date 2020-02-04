import React, { Component } from 'react';
import './github_home.css'

class GithubHome extends Component {
    state = {  }
    render() {
        return (
                <a href="https://github.com/TheOddCaptain" target="_blank" className="link-nostyle project-background github-home" rel="noopener noreferrer">
                <div className="project"><p className="block-focus">Github</p><p className="block-hover">View my GitHub</p></div>
                </a>

        );
    }
}

export default GithubHome;
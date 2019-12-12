import React, { Component } from 'react';
import './github_home.css'

class Github_home extends Component {
    state = {  }
    render() {
        return (
            <div className="project-background github-home">
                <div className="project "><p className="block-focus">Github</p><p className="block-hover">View my GitHub reposetory</p></div>
                </div>
        );
    }
}

export default Github_home;
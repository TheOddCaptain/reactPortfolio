import React, { Component } from 'react';

class Project1 extends Component {
    state = {  }
    render() {
        return (
            <a className="link-nostyle project-background" href="https://react-with-firebase-fc6a4.web.app/" target="_blank" rel="noopener noreferrer">
                <div className="project"> 
                    <p className="block-focus">Project #1<br/><br/>Fullstack App</p>
                    <p className="block-hover">
                         A blogg like website where you must create an account to get access. Project from "The Net Ninja" on Youtube
                    <br/><br/>Made with React, Firebase, JavaScript, HTML and CSS.</p>
                </div>
            </a>
            
            
        );
    }
}

export default Project1;
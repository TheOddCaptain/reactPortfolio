import React, { Component } from 'react';

class Project3 extends Component {
    state = {  }
    render() {
        return (
            <a className="link-nostyle project-background" href="https://nifty-snyder-462dc9.netlify.com/" target="_blank" rel="noreferrer" rel="noreferrer">
                <div className="project"> 
                    <p className="block-focus">Project #3<br/><br/>Diet Journal</p>
                    <p className="block-hover">A diet journal app stored in local storage. I made this to learn more about local storage and storage options.
                    <br/><br/>Made with JavaScript, HTML and CSS.</p>
                </div>
            </a>
           
        );
    }
}

export default Project3;
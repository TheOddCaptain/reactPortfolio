import React, { Component } from 'react';

class Project1 extends Component {
    state = {  }
    render() {
        return (

            <a className="link-nostyle project-background" href="https://jolly-banach-b881d8.netlify.com/" target="_blank">
                <div className="project"> 
                    <p className="block-focus">Project #1 <br/><br/>Budget App</p>
                    <p className="block-hover">A budget app where you can add income and expenses to see how much you have left. 
                    <br/><br/>Made with JavaScript, HTML and CSS.</p>
                </div>
            </a>
            
        );
    }
}

export default Project1;
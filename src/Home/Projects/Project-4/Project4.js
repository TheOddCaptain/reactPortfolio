import React, { Component } from 'react';

class Project4 extends Component {
    state = {  }
    render() {
        return (
            <a className="link-nostyle project-background" href="https://clever-wozniak-0ca4fa.netlify.com/" target="_blank" rel="noreferrer">
                <div className="project"> 
                    <p className="block-focus">Project #4<br/><br/>Dice Game</p>
                    <p className="block-hover">A two player dice game where the winner is the first one to get over 99 points. You lose your turn and current points if you roll a 1.
                    <br/><br/>Made with JavaScript, HTML and CSS.</p>
                </div>
            </a>
        );
    }
}

export default Project4;
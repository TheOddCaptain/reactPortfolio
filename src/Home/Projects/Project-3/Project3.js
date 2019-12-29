import React, { Component } from 'react';

class Project3 extends Component {
    state = {  }
    render() {
        return (
            <a className="link-nostyle project-background" href="https://www.magnusharaldsen.no/people_library.html" target="_blank">
                <div className="project"> 
                    <p className="block-focus">Project #3<br/><br/>Photo Portfolio</p>
                    <p className="block-hover">A simplistic freelance responsive website. The photos are copy and drag protected.
                    <br/><br/>Made with JavaScript, jquery, HTML and CSS.</p>
                </div>
            </a>
        );
    }
}

export default Project3;
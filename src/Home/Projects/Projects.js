import React, { Component } from 'react';
import Project1 from './Project-1/Project1'
import Project2 from './Project-2/Project2'
import Project3 from './Project-3/Project3'
import Project4 from './Project-4/Project4'
import About_home from './About-home/About_home'
import Contact_home from './Contact-home/Contact_home'
import Github_home from './Github-home/Github_home'
import './projects.css'

class Projects extends Component {
    state = { }
    render() {
        return (
            <div className='container-projects'>
                <Project1/>
                <Project2/>
                <Project3/>
                <Project4/>
                <Github_home/>
                <Contact_home/>
                <About_home/>

            </div>
        );
    }
}

export default Projects;
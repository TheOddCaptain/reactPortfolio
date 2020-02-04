import React, { Component } from 'react';
import Project1 from './Project-1/Project1'
import Project2 from './Project-2/Project2'
import Project3 from './Project-3/Project3'
import Project4 from './Project-4/Project4'
import About_Home from './About-Home/About_Home'
import Contact_Home from './Contact-Home/Contact_Home'
import Github_Home from './Github-Home/Github_Home'
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
                <Github_Home/>
                <Contact_Home/>
                <About_Home/>

            </div>
        );
    }
}

export default Projects;
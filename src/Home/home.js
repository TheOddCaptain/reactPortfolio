import React, { Component } from 'react';
import './home.css'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
            <Hero/>
            <Projects/>
            </div>
        );
    }
}

export default Home;
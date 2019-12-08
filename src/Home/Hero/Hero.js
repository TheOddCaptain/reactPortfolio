import React, { Component } from 'react';
import './hero.css'

class Hero extends Component {
    state = {  }
    render() {
        return (
            <div>
                <section className="welcome">
                    <div className="wrapper-welcome" alt="Photo by Fabian Grohs on Unsplash">
                      <h1>
                        WELCOME<br/>
                        to Odd Erik's web developer portfolio
                      </h1>
                    </div>
                </section> 
            </div>
        );
    }
}

export default Hero;
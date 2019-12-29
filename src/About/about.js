import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-wrapper">
            <div className="about-image">
            </div>
                <div className="who-am-i about-background">
                <h3>Who am I</h3>
                <p>
                Name: Odd Erik Haraldsen <br/>
Location: Oslo, Norway
<br/><br/>
I am a self thought web developer who gets truly excited about programming and all it's possibilities. The reason I went into the field of web development is because I enjoy problem solving and logic. I previously worked as an IT-consultant taking calls helping many people figure out their devices and troubleshooting issues to find the best solution for each of them.
                </p>
                </div>
                <div className="toolbox about-background">
                <h3>Toolbox</h3>
                <div className="toolbox-container">
                <div className="languages-i-know">
                <p>
                <u>Languages:</u><br/>
                HTML5<br/>
                CSS3 on grid<br/>
                JavaScript<br/>
                Python
                </p>
                </div>
                <div className="currently-learning">
                <p>
                <u>Learning:</u><br/>
                React<br/>
                Redux<br/>
                Node.js<br/>
                MongoDB<br/>
                </p>
                </div>
                <div className="other-things-i-have-used">
                <p>
                <u>Other things I have used:</u><br/>
                Github<br/>
                VS-code<br/>
                Chrome dev tool<br/>
                Netlify<br/>
                </p>
                </div>
                </div>
                </div>
                <div className="education about-background">
                <h3>Education</h3>
                <p>
                2017 (autumn)	Energy and environment in construction – engineer HiOA. (not completed)<br/><br/>
                2012-2015	Building engineer bachelor at HIG. (not completed)<br/><br/>
                2011-2012	Norwegian army Engineerbataljon at Skjold.<br/><br/>
                2008-2011	Data and electronic with special study expertise from Rud vgs.<br/>
                </p>
                </div>
            
            </div>
        </div>
    );
}

export default About;
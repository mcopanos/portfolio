import React from 'react';
import PassionateAboutCode from '../assests/pictures/code.jpg';
import SelfTaught from '../assests/pictures/self-taught.jpg';
import EagerToLearn from '../assests/pictures/eager-to-learn.jpg';



const About = () => (
    <main className="about-grid">
        <div className="about-wrapper">
            <div className="code-section">
                <img src={ PassionateAboutCode } alt="code on a laptop"/>
                <div className="text-container">
                    <h3>passionate about code</h3><br/>
                    <p>Ever since my first "Hello World" I fell in love with coding.
                        now it's my passion and new life style. I like creating new things and
                        learning new JS frameworks!</p>
                </div>
            </div>
            <div className="code-section">
                <img src={ SelfTaught } alt="code on a laptop"/>
                <div className="text-container">
                    <h3>Self Taught</h3><br/>
                    <p>From Free Code Camp to Udacity, I've taken
                        advantage of all the online resources as well as books
                        and youTube.</p>
                </div>
            </div>
            <div className="code-section">
                <img src={ EagerToLearn } alt="code on a laptop"/>
                <div className="text-container">
                    <h3>Eager to Learn</h3><br/>
                    <p>I haven't stopped at just completing a few online courses,
                        I keep my ear to the ground on the latest and greatest</p>
                </div>
            </div>
        </div>
    </main>
);


export default About;

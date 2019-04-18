import React from 'react';
import CodePic from '../assests/pictures/code.jpg';

const About = () => {
    return(
        <main className='home-grid'>
            <div className="code-section">
                <img src={ CodePic } alt="code on a laptop"/>
                <h3>passionate about code</h3>
            </div>

            <h2>self taught</h2>
            <h2>eager to learn</h2>
            {/*<p>{props.message}</p>*/}
        </main>
    );
};

export default About;

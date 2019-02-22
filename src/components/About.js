import React from 'react';

const About = (props) => {
    return(
        <main>
            <h1>This is the About Page</h1>
            <p>{props.message}</p>
        </main>
    );
};

export default About;

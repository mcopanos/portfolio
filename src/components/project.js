import React from 'react';

const Project = ( props ) => (
    <section className="project-card">
        <img src={ props.image } alt={ props.alt }/>
        <div>
            <h2>{ props.title }</h2>
            <p>{ props.description }</p>
        </div>
        <div>
            <button>Source Code</button>
            <button>Demo</button>
        </div>
    </section>
);

export default Project;

import React from 'react';
import Project from '../components/project';
import zSweets from '../images/zSweets.png';
import mockSite from '../images/mockup-site.png';
import memoryGame from '../images/memory-game.png';
import gMap from '../images/google-map.png';

const Projects = () => (
    <main className='home-grid'>
        <h1>This is the Projects Page</h1>
        <Project
            image={ zSweets }
            alt="Z's Sweets home page"
            title="Z's Sweets Website"
            description="Help this small business owner show off her work while gaining new customers."
        />
        <Project
            image={ mockSite }
            alt="Mostly Serious home page"
            title="Real Life Practice"
            description="This was a practice project that I coded from scratch from old designs from Mostly Serious."
        />
        <Project
            image={ memoryGame }
            alt="memory game home page"
            title="Memory Game"
            description="This was a project that I completed while I was taking the Udacity Front-End Developer course"
        />
        <Project
            image={ gMap }
            alt="google map project"
            title="Neighborhood Map"
            description="This was a project that I completed while I was taking the Udacity Front-End Developer course"
        />
    </main>
);

export default Projects;


import React, { Component } from 'react';
import './App.css';

import About from './components/About'
import Accomplishments from "./components/Accomplishments";
import Header from './components/Header'
import Home from './components/Home'
import Projects from "./components/Projects";

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      navLinks: ['Home', 'About Me', 'Projects', 'Accomplishments', 'Contact Me'],
      msg: {
        home: 'This is the Home Page',
        about: 'This is the About Me Page',
        projects: 'This is the Project Page',
        accomplishments: 'This is the Accomplishments Page',
        contact: 'This is the Contact Me Page'
      }
    }
  }
  render() {
    const { navLinks, msg} = this.state;
    return (
        <div>
          <Header links={navLinks} />
          <Home message={msg} />
          <About message={msg} />
          <Projects message={msg} />
          <Accomplishments message={msg}/>
        </div>

    );
  }
}

export default Layout;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import About from './components/About'
import Accomplishments from "./components/Accomplishments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from './components/Header'
import Home from './components/Home'
import Projects from "./components/Projects";

class Layout extends Component {

  render() {
    return (
        <div>
          <Header />
          <Route path="/" exact render={() => <Home strings={["I'm a web developer", "I love solving problems", "And coding with React.js", "Wanna see my work?"]}/>} />
          <Route path="/about" render={() => <About />} />
          <Route path="/projects" render={() => <Projects/>}  />
          <Route path="/accomplishments" render={()=> <Accomplishments/>} />
          <Route path="/contact" render={() =><Contact/>} />
          <Footer />
        </div>
    );
  };
}

export default Layout;

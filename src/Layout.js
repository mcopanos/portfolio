import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import About from './components/About'
import Accomplishments from "./components/Accomplishments";
import Contact from "./components/Contact";
import Header from './components/Header'
import Home from './components/Home'
import Projects from "./components/Projects";

class Layout extends Component {

  render() {
    return (
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/accomplishments" component={Accomplishments} />
          <Route path="/contact" component={Contact} />
        </div>
    );
  };
}

export default Layout;

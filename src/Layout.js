import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      navLinks: ['Home', 'About Me', 'Projects', 'Accomplishments', 'Contact Me']
    }
  }
  render() {
    return (
        <Header links={this.state.navLinks}/>
    );
  }
}

export default Layout;

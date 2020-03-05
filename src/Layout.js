import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/Main.css';
import './css/mobile_views/Main.css'
import About from './pages/About'
import Accomplishments from "./pages/Accomplishments";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from './components/Header'
import Home from './pages/Home'
import Projects from "./pages/Projects";

class Layout extends Component {

  render() {
    return (
        <div>
          <Header />
          <Route path="/" exact render={() => <Home
              strings={[
                  "I'm a web developer",
                  "I love solving problems with code",
                  "Wanna see my work?"]}/>}
          />
          <Route path="/about" render={() => <About/>} />
          <Route path="/projects" render={() => <Projects/>}  />
          <Route path="/accomplishments" render={()=> <Accomplishments/>} />
          <Route path="/contact" render={() =><Contact/>} />
          <Footer />
        </div>
    );
  };
}

export default Layout;

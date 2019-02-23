import React, { Component } from 'react';
import Typed from 'typed.js';
import ProfilePic from '../assests/pictures/profile-pic.jpg';
import {Link} from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: false
        };
        this.typed = new Typed(this.el, options);
    }
    render() {

        return(
            <main className="home-grid">
                <div className="home-section">
                    <img className="profile-pic" src={ProfilePic} alt="head shot"/>
                    <h1 className="home-heading">Hi, I'm Mike Copanos</h1>
                    <br/>
                    <span className="animated-text" ref={(el) => {this.el = el}}/>
                    <br/>
                    <Link id="my-btn" className="my-work-btn-hide" to='/Projects'>Check out my work</Link>
                </div>
            </main>
        );
    };
}

export default Home;

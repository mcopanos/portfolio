import React, { Component } from 'react';
import Typed from '../../node_modules/typed.js/lib/typed';
import ProfilePic from '../images/profile-pic.jpg';
import { Link } from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 40,
            backSpeed: 30,
            showCursor: false
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillMount() {
        function showButton() {
            const button = document.querySelector('#my-btn');
            button.classList.add('my-work-btn-show');
            button.classList.remove('my-work-btn-hide');
        }
        setTimeout(showButton, 7000)
    }

    render() {
        return(
            <main className="home-grid">
                <div className="home-section">
                    <img className="profile-pic" src={ProfilePic} alt="head shot"/>
                    <h1 className="home-heading">Hi! I'm Mike Copanos...</h1>
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

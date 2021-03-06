import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/Projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/accomplishments'>Accomplishments</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;

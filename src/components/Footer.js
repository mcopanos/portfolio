import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
    <footer className="my-footer">
        <div>
            <a href="https://github.com/mcopanos" target="blank"><FaGithub /></a>
            <a href="https://linkedin.com/mcopanos" target="blank"><FaLinkedin /></a>
        </div>
    </footer>
);

export default Footer;

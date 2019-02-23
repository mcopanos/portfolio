import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <footer className="my-footer">
            <p>This is the footer</p>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </footer>
    );
};

export default Footer;

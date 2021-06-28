import React from 'react';
import {Link} from "react-scroll";

const NavigationLinks = () => {
    return (
        <ul className="navigation-links">
            <li>
                <Link to="/">Start</Link>
            </li>
            <li>
                <Link to="simple-steps">O co chodzi?</Link>
            </li>
            <li>
                <Link to="about-us">O nas</Link>
            </li>
            <li>
                <Link to="who-we-help">Fundacja i organizacje</Link>
            </li>
            <li>
                <Link to="contact-us">Kontakt</Link>
            </li>
        </ul>
    );
};

export default NavigationLinks;
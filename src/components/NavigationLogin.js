import React from 'react';
import {Link} from "react-router-dom";

const NavigationLogin = () => {
    return (
        <ul className="navigation-login">
            <li>
                <Link to="/logowanie">Zaloguj</Link>
            </li>
            <li>
                <Link to="/rejestracja">Załóz konto</Link>
            </li>
        </ul>
    );
};

export default NavigationLogin;
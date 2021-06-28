import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="home-header">
            <div className="text-decoration">
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            </div>
            <div className="home-buttons">
                <Link to="/logowanie">
                    <button>Oddaj Rzeczy</button>
                </Link>
                <Link to="/logowanie">
                    <button>Zorganizuj Zbiórkę</button>
                </Link>
            </div>
        </div>            
    );
};

export default Header;
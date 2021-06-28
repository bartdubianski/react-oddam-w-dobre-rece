import React from 'react';
import NavigationLogin from "./NavigationLogin";
import NavigationLinks from "./NavigationLinks";


const Navigation = () => {
    return (
        <nav className="home-navigation">
            <NavigationLogin />
            <NavigationLinks />
        </nav>
    );
};

export default Navigation;
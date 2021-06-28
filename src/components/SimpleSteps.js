import React from 'react';
import Icon from './Icon';
import {Link} from "react-router-dom";
import Icon1 from '../assets/Icon-1.svg';
import Icon2 from '../assets/Icon-2.svg';
import Icon3 from '../assets/Icon-3.svg';
import Icon4 from '../assets/Icon-4.svg';

const SimpleSteps = () => {
    return (
        <>
            <div className="text-decoration">
                <p>Wystarczą 4 proste kroki</p>
            </div>
            <div className="home-columns grey">
                <Icon 
                    icon={Icon1}
                    title="Wybierz rzeczy"
                    description="ubrania, zabawki, sprzęt i inne"
                />
                <Icon 
                    icon={Icon2}
                    title="Spakuj je"
                    description="skorzystaj z worków na śmieci"
                />
                <Icon 
                    icon={Icon3}
                    title="Zdecyduj komu chcesz pomóc"
                    description="wybierz zaufane miejsce"
                />
                <Icon 
                    icon={Icon4}
                    title="Zamów kuriera"
                    description="kurier przyjedzie w dogodnym terminie"
                />
            </div>
            <Link to="/logowanie">
                    <button>Oddaj Rzeczy</button>
            </Link>
        </>        
    );
};

export default SimpleSteps;
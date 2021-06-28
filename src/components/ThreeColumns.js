import React from 'react';

const ThreeColumns = () => {
    return (
        <div className="home-columns yellow">
            <div className="column">
                <p className="column title">10</p>
                <p className="column subtitle">oddanych worków</p>
                <p className="column text">Lorem ipsum dolor sit amet, consectetur adipisc 
                Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <p className="column title">5</p>
                <p className="column subtitle">wspartych organizacji</p>
                <p className="column text">Lorem ipsum dolor sit amet, consectetur adipisc 
                Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat. </p>
            </div>
            <div className="column">
                <p className="column title">7</p>
                <p className="column subtitle">Zorganizowanych Zbiórek</p>
                <p className="column text">Lorem ipsum dolor sit amet, consectetur adipisc 
                Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat. </p>
            </div>
        </div>
    );
};

export default ThreeColumns;
import React from 'react';

const Icon = ({icon, title, description}) => {
    return (
        <div className="column">
            <img src={icon} alt={title}/>
            <p className="column subtitle">{title}</p>
            <p className="column text">{description}</p>
        </div>
    );
};

export default Icon;
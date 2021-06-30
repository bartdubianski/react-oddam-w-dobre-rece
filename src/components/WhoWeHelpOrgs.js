import React from 'react';

const WhoWeHelpOrgs = ({orgs}) => {
    return (
        <ul>
            {orgs.map(org => (
                <li key={org.id}>
                    <b>{org.name}</b> <br />
                    <u>{org.description}</u> <br />
                    {org.needs}
                </li> 
            ))}
        </ul>
    );
};

export default WhoWeHelpOrgs;
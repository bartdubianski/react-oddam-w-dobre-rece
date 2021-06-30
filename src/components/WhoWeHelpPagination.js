import React from 'react';

const WhoWeHelpPagination = ({ orgsPerPage, totalOrgs, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalOrgs / orgsPerPage); i++) {
        pageNumbers.push(i);
      }

    return (
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <span onClick={() => paginate(number)}>
                        {number}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default WhoWeHelpPagination;
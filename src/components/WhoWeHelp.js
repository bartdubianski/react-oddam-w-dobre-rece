import React, {useEffect, useState} from 'react';
import firebase from '../dbconfig';
import WhoWeHelpOrgs from './WhoWeHelpOrgs';
import WhoWeHelpPagination from './WhoWeHelpPagination';

const dbRef = firebase.firestore().collection("whowehelp")

const WhoWeHelp = () => {
    const [fundationsList, setFundationsList] = useState([]);
    const [type, setType] = useState('fundation')

    const [currentPage, setCurrentPage] = useState(1);
    const [orgsPerPage] = useState(3);

    useEffect(()=> {
        dbRef
            .get()
            .then((querySnapshot)=>{
                const orgs = querySnapshot.docs.map((org)=> org.data()).filter(o => o.type === type);
            setFundationsList(orgs);
            });
    }, [type]);


    const filterOrganizations = (orgtype) => {
        setType(orgtype);
    }
    

    //Get current posts
    const indexOfLastOrg = currentPage * orgsPerPage;
    const indexOfFirstOrg = indexOfLastOrg - orgsPerPage;
    const currentOrgs = fundationsList.slice(indexOfFirstOrg, indexOfLastOrg);
    
    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="who-we-help">
            <div className="text-decoration">
                    <p>Komu pomagamy?</p>
            </div>
            <div className="options">
                <button
                    className="option"
                    onClick={() => filterOrganizations('fundation')}
                >
                        Fundacjom
                </button>
                <button
                    className="option"
                    onClick={() => filterOrganizations('ngo')}
                >
                        Organizają pozarządowym
                </button>
                <button
                    className="option"
                    onClick={() => filterOrganizations('local')}
                >
                        Lokalnym zbiórkom
                </button>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

            <WhoWeHelpOrgs 
                orgs={currentOrgs}
            />
            <WhoWeHelpPagination 
                orgsPerPage={orgsPerPage}
                totalOrgs={fundationsList.length}
                paginate={paginate}
            />

        </div>
    );
};

export default WhoWeHelp;
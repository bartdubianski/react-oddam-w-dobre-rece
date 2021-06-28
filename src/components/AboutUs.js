import React from 'react';
import Signature from '../assets/Signature.svg';
import People from '../assets/People.jpg';

const AboutUs = () => {
    return (
        <div className="about-us grey">
            <div className="about-us-text">
                <div className="text-decoration">
                    <p>O nas</p>
                </div>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parnsnip.</p>
                <div className="signature">
                    <img src={Signature} alt="Signature" />
                </div>
            </div>
                <img className="image-people" src={People} alt="People" />
        </div>
    );
};

export default AboutUs;
import React from 'react';
import Header from './Header';
import ThreeColumns from './ThreeColumns';
import Navigation from './Navigation';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div className="home">
            <section className="home-top">
                <Navigation />
                <Header />
            </section>
            <section name="three-cloumns">
                <ThreeColumns />
            </section>
            <section name="simple-steps">
                <SimpleSteps />
            </section>
            <section name="about-us">
                <AboutUs />
            </section>
            <section name="who-we-help">
                <WhoWeHelp />
            </section>
            <section name="contact-us">
                <ContactUs />
            </section>
            <footer>
                <p>Copyright by Coders Lab</p>
                <p>IG FB</p>
            </footer>
           
        </div>
    );
};

export default Home;
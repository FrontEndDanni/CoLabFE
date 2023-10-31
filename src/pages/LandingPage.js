import React from 'react';
import '../styling/LandingPage.css';
import LandingPic from '../media/landingpic.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-title">Simplify social planning with <span className="empha">PlanPal</span></div>
            <p>Easily coordinate meetups with friends</p>
            <div className="button-container">
                <button>
                    <h3>Create your poll!</h3>
                </button>
            </div>
            <img src={LandingPic} alt="Description of the image" />

            
        </div>
    );
};

export default LandingPage;

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

            <h4>Tired of those never-ending group chats and confusing scheduling back-and-forths? We've got your back!</h4>

            <div className="container">
      <div className="row">
        <div className="box">Choose the perfect dates and times for your upcoming hangout. It's as simple as clicking on a picking a day and selecting a time to your preferred moment of fun.</div>
        <div className="box">Box 2</div>
      </div>
      <div className="row">
        <div className="box">Once your ideal days and times are set, send out a poll to your friends effortlessly with a custom link!</div>
        <div className="box">Box 4</div>
      </div>
      <div className="row">
        <div className="box">Sit back and relax as your friends cast their votes. The app compiles the results and shows you the most popular day and time for your social gathering. It's that easy! Time to get the party started.</div>
        <div className="box">Box 6</div>
      </div>
    </div>
        </div>
    );
};

export default LandingPage;

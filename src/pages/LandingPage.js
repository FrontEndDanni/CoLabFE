import React from 'react';
import '../styling/LandingPage.css';
import LandingPic from '../media/landingpic.png';
import Landing1 from '../media/landing1.png';
import Landing2 from '../media/landing2.png';
import Landing3 from '../media/landing3.png';
import UseCase1 from '../media/casual.jpg';
import UseCase2 from '../media/dinnerparty.jpg';
import UseCase3 from '../media/hikingtrips.jpg';
import UseCase4 from '../media/grabdrinks.jpg';
import UseCase5 from '../media/boardgame.jpg';
import UseCase6 from '../media/studysession.jpg';

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
        <div className="box">
          <h3>Step 1: Pick some Days & Times</h3>
          Choose the perfect dates and times for your upcoming hangout. It's as simple as clicking on a picking a day and selecting a time to your preferred moment of fun.</div>
        <div className="box">
        <img 
        src={Landing1} 
        alt="Description of the image"
        className="landing1" />
        </div>
      </div>
      <div className="row">
        <div className="box">
        <h3>Step 2: Send the Poll out to Friends</h3>
          Once your ideal days and times are set, send out a poll to your friends effortlessly with a custom link!</div>
        <div className="box">
        <img 
        src={Landing2} 
        alt="Description of the image"
        className="landing2" />
        </div>
      </div>
      <div className="row">
        <div className="box">
        <h3>Step 3: See the Poll Results</h3>
          Sit back and relax as your friends cast their votes. The app compiles the results and shows you the most popular day and time for your social gathering. It's that easy! Time to get the party started.</div>
        <div className="box">
        <img 
        src={Landing3} 
        alt="Description of the image"
        className="landing3" />
        </div>
        
      </div>
       <div className="custom-box-container">
      <h2 className="custom-title">Use Cases</h2>
      <div className="custom-row1">
        <img
src={UseCase1}
alt="Description of the image" className="custom-box1" />
        <img
src={UseCase2}
alt="Description of the image"
className="custom-box2"/>
        <img
src={UseCase3}
alt="Description of the image"
className="custom-box3"/>
      </div>
      <div className="custom-row2">
        <img
src={UseCase4}
alt="Description of the image"
className="custom-box4"/>
        <img
src={UseCase5}
alt="Description of the image"
className="custom-box5"/>
        <img
src={UseCase6}
alt="Description of the image"
className="custom-box6"/>
      </div>
    </div>
    </div>
        </div>
    );
};

export default LandingPage;

import * as React from "react";
import '../styling/PollPage.css';

const PollPage = ({ eventData, setEventData, eventQuestions, setEventQuestions, eventDays, setEventDays }) => {
  return (
    <div className="poll-page">
      <div className="pollpage-title">Poll Details</div>
      <div className="pollpage-modal">
        <div className="modal-content">
          <form>
            <label htmlFor="name">Your Name*</label><br />
            <input type="text" id="name" name="name" placeholder="Your Name" 
            value={eventData.creatorname}
             onChange={(e) => {
             setEventData({ ...eventData, creatorname: e.target.value });
            }}
            /><br />

            <label htmlFor="email">Your Email*</label><br />
            <input type="text" id="email" name="email" placeholder="Your Email" 
            value={eventData.creatoremail}
            onChange={(e) => {
            setEventData({ ...eventData, creatoremail: e.target.value });
               }}
            /><br />

            <label htmlFor="pollName">Poll Name*</label><br />
            <input type="text" id="pollName" name="pollName" placeholder="Poll Name" 
               value={eventData.eventname}
               onChange={(e) => {
               setEventData({ ...eventData, eventname: e.target.value });
                  }}
            /><br />

           {/*<label htmlFor="timeZone">Time Zone (Optional)</label><br />
            <select id="timeZone" name="timeZone">
              <option value="">- Select -</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>*/}

            <label htmlFor="description">Description (Optional)</label><br />
            <textarea id="description" name="description" rows="4" cols="50" placeholder="Enter a more detailed description here..."
            value={eventData.polldescription}
               onChange={(e) => {
               setEventData({ ...eventData, polldescription: e.target.value });
                  }}
              ></textarea><br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PollPage;

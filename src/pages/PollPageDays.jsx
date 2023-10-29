import * as React from "react";
import { Link } from 'react-router-dom';
import '../styling/PollPageDays.css';

const PollPageDays = ({ eventData, setEventData, eventQuestions, setEventQuestions, eventDays, setEventDays }) => {
  return (

    <div className="poll-page">
                  {/* TODO: Add "allow multiple answers", JS functionality */}

      <div className="polldays-title">Enter days to suggest for your event!</div>
      <div className="polldays-modal">
        <div className="modal-content">
          <form>
            {/* {for (let i = 1;  i < eventDays; i++) {}} */}
            <h2>Options:</h2>
            <label htmlFor="timeZone">Add Day*</label><br />
            <select id="timeZone" name="timeZone">
              <option value="">- Select -</option>
              <option value="Red">Friday</option>
              <option value="Blue">Saturday</option>
              <option value="Green">Sunday</option>
              <option value="Green">Monday</option>
              <option value="Green">Tuesday</option>
              <option value="Green">Wednesday</option>
              <option value="Green">Thursday</option>
            </select>
            <label htmlFor="timeZone">Add Day*</label><br />
            <select id="timeZone" name="timeZone">
              <option value="">- Select -</option>
              <option value="Red">Friday</option>
              <option value="Blue">Saturday</option>
              <option value="Green">Sunday</option>
              <option value="Green">Monday</option>
              <option value="Green">Tuesday</option>
              <option value="Green">Wednesday</option>
              <option value="Green">Thursday</option>
            </select>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default PollPageDays;

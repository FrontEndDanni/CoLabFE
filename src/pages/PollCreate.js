import * as React from "react";
import { Link } from 'react-router-dom';
import '../styling/PollCreate.css';

export default function PollCreate({ eventData, setEventData, eventQuestions, setEventQuestions, eventDays, setEventDays }) {
  return (
    <div className="poll-page">
      <div className="pollpage-title">Final Step</div>
      <div className="pollcreate-modal">
        <div className="modal-content">
          <form>
            <h2>Poll Details</h2>
            <label htmlFor="name">Poll Name*</label><br />
            <input type="text" id="name" name="name" placeholder="Enter your name here" /><br />

            <label htmlFor="timeZone">Time Zone (Optional)</label><br />
            <select id="timeZone" name="timeZone">
              <option value="">- Select -</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>

            <label htmlFor="description">Description (Optional)</label><br />
            <textarea id="description" name="description" rows="4" cols="50" placeholder="Enter a more detailed description here..."></textarea><br />
          </form>
        </div>
      </div>

      <div className="pollpage-title">Poll Details</div>

      <div className="pollcreate-modal">
        <div className="modal-content">
          <form>
            <h2>Poll Details</h2>
            <label htmlFor="name">Poll Name*</label><br />
            <input type="text" id="name" name="name" placeholder="Enter your name here" /><br />

            <label htmlFor="timeZone">Time Zone (Optional)</label><br />
            <select id="timeZone" name="timeZone">
              <option value="">- Select -</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>

            <label htmlFor="description">Description (Optional)</label><br />
            <textarea id="description" name="description" rows="4" cols="50" placeholder="Enter a more detailed description here..."></textarea><br />
          </form>
        </div>
      </div>
      
    </div>
  );
}

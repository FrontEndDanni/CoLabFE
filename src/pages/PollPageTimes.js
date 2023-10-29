import * as React from "react";
import {Link} from 'react-router-dom';
import '../styling/PollPageTimes.css';

export default function PollPageTimes({ eventData, setEventData, eventQuestions, setEventQuestions, eventDays, setEventDays }) {
  return (
    <div className="poll-page">
            {/* TODO: Add "allow multiple answers", JS functionality */}

      <div className="polldays-title">Nice! Now suggest some times</div>
      <div className="polltimes-modal">
        <div className="modal-content">
          <form>
            <h2>Select time(s) for: *Picked Day Here*</h2>
            <label htmlFor="timeZone">Add Time (Optional)</label><br />
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
            <label htmlFor="timeZone">Add Time (Optional)</label><br />
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
}


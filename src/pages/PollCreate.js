import * as React from "react";
import { Link } from 'react-router-dom';
import '../styling/PollCreate.css';



const DayTimeDisplay = ({day, times})=>{
  return(
    <>
    <h2>{day[0].toUpperCase() + day.slice(1)}</h2>
    
    {/* this p element needs to be styled to the right on this page it will always be a zero later it will be votes */}
    <p>0</p>
    <p style={{ height: "7px", width: "100%", background: "#FF000020" }}></p>
  {times.map((time) => (
      <button className='timeButton'>{time}</button>
  ))}
  </>
  ); 

}
export default function PollCreate({eventData, eventQuestions}) {
  

  
  return (
      <div className="poll-page">
        <div className="pollpage-title">Final Step</div>
        <div className="pollcreate-modal">
          <div className="modal-content">
            <form>
              <h2>Poll Details</h2>
              <label htmlFor="name">Poll Name*</label><br />
              <input type="text" id="name" name="name" placeholder="Enter your name here" /><br />
  
              <label htmlFor="description">Description (Optional)</label><br />
              <textarea id="description" 
              name="description" 
              rows="4" 
              cols="50" 
              placeholder="Enter a more detailed description here..."
              style={{ resize: 'none' }}
              ></textarea><br />
            </form>
          </div>
        </div>
  
        <div className="pollpage-title">Poll Details</div>
        <div className="pollcreate-modal">
          <div className="modal-content">
            
              <h2>Question: Which days/times work best</h2>
              {eventQuestions.map(({ day, times }) => (
              <DayTimeDisplay
              day = {day}
              times = {times}
              ></DayTimeDisplay>
              
              ))}


           
          </div>
        </div>
        
      </div>
    );
  }


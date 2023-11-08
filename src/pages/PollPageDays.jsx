import React, { useEffect, useState } from "react";
import "../styling/PollPageDays.css";

const DaySelector = ({ onChange, disabledOptions = [], disabled, value }) => {
  return (
    <select
      className="includesList"
      disabled={disabled}
      onChange={(e) => {
        onChange(e.target.value, []);
      }}
    >
      {disabledOptions.includes("sunday") && value !== "sunday" ? null : (
        <option value="sunday">Sunday</option>
      )}
      {disabledOptions.includes("monday") && value !== "monday" ? null : (
        <option value="monday">Monday</option>
      )}
      {disabledOptions.includes("tuesday") && value !== "tuesday" ? null : (
        <option value="tuesday">Tuesday</option>
      )}
      {disabledOptions.includes("wednesday") && value !== "wednesday" ? null : (
        <option value="wednesday">Wednesday</option>
      )}
      {disabledOptions.includes("thursday") && value !== "thursday" ? null : (
        <option value="thursday">Thursday</option>
      )}
      {disabledOptions.includes("friday") && value !== "friday" ? null : (
        <option value="friday">Friday</option>
      )}
      {disabledOptions.includes("saturday") && value !== "saturday" ? null : (
        <option value="saturday">Saturday</option>
      )}
    </select>
  );
};

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const getNextAvailableDay = (currentValues) => {
  return days.find((day) => !currentValues.includes(day));
};

export default function PollPageDays({ eventQuestions, onChange, onRemove }) {
  const [valueToAdd, setValueToAdd] = useState("sunday");
  const disabledOptions = eventQuestions.map(({ day }) => day);
  const allowMoreQuestions = eventQuestions.length < 7;

  return (
  
        <div className="poll-page">
        <div className="polldays-title">Enter days to suggest for your event!</div>
        <div className="polldays-modal">
        

      {allowMoreQuestions ? (
        <div className="modal-content">
          <DaySelector
            onChange={(value) => setValueToAdd(value)}
            disabledOptions={disabledOptions}
            defaultValue="sunday"
          />
          <button
          className="pickday-button"
            onClick={() => {
              onChange(valueToAdd, []);
              setValueToAdd(
                getNextAvailableDay([
                  ...eventQuestions.map(({ day }) => day),
                  valueToAdd,
                ])
              );
            }}
          >
            Add Day
          </button>
        </div>
      ) : null}
      {eventQuestions.map((item, idx) => (
        <>
          <button className="removeButton"
            onClick={() => onRemove(item.day)}
          >
            {item.day[0].toUpperCase() + item.day.slice(1)}
          </button>
        </>
        // <DaySelector
        //   key={`${item.day}-${idx}`}
        //   {...item}
        //   onChange={onChange}
        //   disabled
        //   disabledOptions={disabledOptions}
        //   value={item.day}
        // />
      ))}
      </div>
      </div>
 
  );
}

//   // how do i identify the which one im in, i have a counter in the for loop.
//   function handleChange(e){
//     const questionsDict = eventQuestions
//     const checker = true
//     questionsDict[`question1`] = this.value;
//     setEventQuestions(questionsDict)
//   }
//   //react hook form

//   return (

//     <div className="poll-page">
//                   {/* TODO: Add "allow multiple answers", JS functionality */}

//       <div className="polldays-title">Enter days to suggest for your event!</div>
//       <div className="polldays-modal">

//         <div className="modal-content">
//     <form
//     >
//       <h2>Options:</h2>
//       <label htmlFor="timeZone">Add Day*</label><br />
//       <select id="days" name="question1" placeholder="Select" value={eventQuestions.question1}
//       onChange={(e) => {
//         this.setEventQuestions({ ...eventQuestions, question1: e.target.value });
// }}
//       >
//         <option value="Friday">Friday</option>
//         <option value="Saturday">Saturday</option>
//         <option value="Sunday">Sunday</option>
//         <option value="Monday">Monday</option>
//         <option value="Tuesday">Tuesday</option>
//         <option value="Wedensday">Wednesday</option>
//         <option value="Thursday">Thursday</option>
//       </select>
//     </form>
//     {/* {Object.keys(eventQuestions).length > 1 &&
//         <>
//         {eventQuestions.map((i) => < Question currentNumber={i+1} eventQuestions={eventQuestions} setEventQuestions={setEventQuestions} eventDays={eventDays} setEventDays={setEventDays}/>)}
//         </>
// } */}
//         </div>
//       </div>
//     </div>
//   );
// };

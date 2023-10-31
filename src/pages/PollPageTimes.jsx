import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/PollPageTimes.css";
import { Button, TimePicker } from "antd";

const DisplayCard = ({ children, day }) => {
  return (
    <div className="modal-content">
      <h3>Add time for {day}</h3>
      {children}
    </div>
  );
};

const TimeButton = ({ day, times, onChange }) => {
  console.log(times);
  // const [timesState, setTimesState] = (times);
  return (
    //when i click i want to remove the time from times clicked
    times.map((time) => (
      <>
        <button
          className="removeButton"
          style={{ background: "#FF000020", margin: "50px", display: "flex" }}
          onClick={() => {
            const timeIndex = times.indexOf(time)
            times.splice(timeIndex, 1)
            onChange(day, times);
          }}
        >
          {time}
        </button>
      </>
    ))
  );
};

const TimeSelector = ({ onChange, day, times }) => {
  return (
    <TimePicker
      showSecond={false}
      showNow={false}
      format="hh A"
      use12Hours={true}
      onChange={(newtime, datestring) => {
        if (datestring !== "") {
          onChange(day, [...times, datestring]);
          console.log(datestring);
        }
      }}
    ></TimePicker>
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

export default function PollPageTimes({
  eventQuestions,
  onChange,
  onRemoveTime,
}) {
  const [valueToAdd, setValueToAdd] = useState([]);

  return (
    <div className="poll-page">
      <div className="polldays-title"></div>
      <div className="polldays-modal">
        {eventQuestions.map(({ day, times }) => (
          <>
            <DisplayCard day={day}>
              <TimeSelector
                onChange={onChange}
                day={day}
                times={times}
              ></TimeSelector>
            </DisplayCard>
            <TimeButton
              day={day}
              times={times}
              onChange={onChange}
            ></TimeButton>
          </>
        ))}

        {/* {eventQuestions.map((item, idx) => (
          <>
            <h3 className="addedDay">{item.day}</h3>
            <button
              className="removeButton"
              style={{ background: "#FF000020" }}
              onClick={() => onRemove(item.day)}
            >
              remove
            </button>
          </> */}

        {/* // <DaySelector
          //   key={`${item.day}-${idx}`}
          //   {...item}
          //   onChange={onChange}
          //   disabled
          //   disabledOptions={disabledOptions}
          //   value={item.day}
          // /> */}
        {/* ))} */}
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

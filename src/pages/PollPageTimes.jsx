import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/PollPageTimes.css";
import { Button, TimePicker } from "antd";

const DisplayCard = ({ children, day }) => {
  return (
    <div>
      <h3>Add time for {day[0].toUpperCase() + day.slice(1)}</h3>
      {children}
    </div>
  );
};

const TimeButton = ({ day, times, onChange }) => {
  console.log(times);
  // const [timesState, setTimesState] = (times);
  return (
    times.map((time) => (
      <>
        <button
          className="removeButton"
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
      format="h A"
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
      <div className="polltimes-title">Nice! Now suggest some times</div>
      <div className="polltimes-modal">
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

      </div>
    </div>
  );
}


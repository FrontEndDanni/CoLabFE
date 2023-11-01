import React, { useState } from "react";
import PollCreate from "./PollCreate";
import PollPageDays from "./PollPageDays";
import PollPageTimes from "./PollPageTimes";
import PollPage from "./PollPage";

export default function PollForm() {
  const [page, setPage] = useState(0);
  const [eventData, setEventData] = useState({
    creatorname: "",
    creatoremail: "",
    eventname: "",
    polldescription: "",
    shareresults: false,
  });
  const [eventQuestions, setEventQuestions] = useState([]);
  // const [eventDays, setEventDays] = useState(2);

  const onRemove = (changedDay) => {
    const newData = [...eventQuestions];
    const dayIndex = eventQuestions.findIndex(({ day }) => day === changedDay);
    if (dayIndex >= 0) {
      newData.splice(dayIndex, 1);
      setEventQuestions(newData);
    }
  };

  const submitForm = () =>{
    const questionsObject = {};
    let counter = 1;
    eventQuestions.forEach(({day, times})=> {
    times.forEach((time)=> {
      questionsObject[`question${counter}`] = {
        questiondate: day,
        questiontime: time
      };
      counter = counter +1;
    });

    })
    const submittedObject = {'event': eventData, 'questions':questionsObject}
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let requestBody = JSON.stringify(submittedObject)
    console.log(requestBody)
    fetch('http://3.142.245.70/api/event', {
      method: 'POST',
      headers: myHeaders,
      body: requestBody
      
  })
  }

  const onChange = (changedDay, times) => {
    console.log(changedDay)
    console.log(times)
    const newData = [...eventQuestions];
    const dayIndex = eventQuestions.findIndex(({ day }) => day === changedDay);
    console.log(dayIndex);
    if (dayIndex === -1) {
      const newDayData = {
        day: changedDay,
        times
      };

      setEventQuestions(newData.concat(newDayData));
    } else {
      newData.splice(dayIndex, 1, {
        day: changedDay,
        times
      });
      setEventQuestions(newData);
    }
    console.log(eventQuestions);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <PollPage
          eventData={eventData}
          setEventData={setEventData}
          eventQuestions={eventQuestions}
          setEventQuestions={setEventQuestions}
        />
      );
    } else if (page === 1) {
      return (
        <PollPageDays
          eventQuestions={eventQuestions}
          onChange={onChange}
          onRemove={onRemove}
        />
      );
    } else if (page === 2) {
      return (
        <PollPageTimes
          eventQuestions={eventQuestions}
          onChange={onChange}
        />
      );
    } else {
      return (
        <PollCreate
          eventData={eventData}
          eventQuestions={eventQuestions}
        />
      );
    }
  };

  return (
    <>
      <div className="pollForm">{PageDisplay()}</div>
      <div className="button-container">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            if (page === 3) {
              submitForm()
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page > 2 ? "Create poll" : "Next"}
        </button>
      </div>
    </>
  );
}

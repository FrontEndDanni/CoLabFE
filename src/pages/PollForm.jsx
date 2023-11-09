import React, { useState } from "react";
import PollCreate from "./PollCreate";
import PollPageDays from "./PollPageDays";
import PollPageTimes from "./PollPageTimes";
import PollPage from "./PollPage";
import { useNavigate } from 'react-router-dom';

export default function PollForm() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [eventData, setEventData] = useState({
    creatorname: "",
    creatoremail: "",
    eventname: "",
    polldescription: "",
    shareresults: false,
  });
  
  const [eventQuestions, setEventQuestions] = useState([]);
  const [disableNext, setDisableNext] = useState(true);

  const onRemove = (changedDay) => {
    const newData = [...eventQuestions];
    const dayIndex = eventQuestions.findIndex(({ day }) => day === changedDay);
    if (dayIndex >= 0) {
      newData.splice(dayIndex, 1);
      setEventQuestions(newData);
    }
  };

  const submitForm = () => {
    const questionsObject = {};
    let counter = 1;
    eventQuestions.forEach(({ day, times }) => {
      times.forEach((time) => {
        questionsObject[`question${counter}`] = {
          questiondate: day,
          questiontime: time,
        };
        counter = counter + 1;
      });
    });
    const submittedObject = { event: eventData, questions: questionsObject };
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestBody = JSON.stringify(submittedObject);
    console.log(requestBody);
    fetch("https://api.yourplanpal.com/api/event", {
      method: "POST",
      headers: myHeaders,
      body: requestBody,
    })
    .then(async response =>{
      let data = await response.json();
      navigate(`/pollresults/${data.id}/view`)
    });
  };

  const onChange = (changedDay, times) => {
    const newData = [...eventQuestions];
    const dayIndex = eventQuestions.findIndex(({ day }) => day === changedDay);
    if (dayIndex === -1) {
      const newDayData = {
        day: changedDay,
        times,
      };
      setEventQuestions(newData.concat(newDayData));
    } else {
      newData.splice(dayIndex, 1, {
        day: changedDay,
        times,
      });
      setEventQuestions(newData);
    }
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
        <PollPageTimes eventQuestions={eventQuestions} onChange={onChange} />
      );
    } else {
      return (
        <PollCreate
          eventData={eventData} // Pass the eventData state to PollCreate component
          eventQuestions={eventQuestions}
        />
      );
    }
  };

  return (
    <>
      <div className="pollForm">{PageDisplay()}</div>
      <div className="nav-button-container">
        <button
          className="backbutton"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Back
        </button>
        <button
          className="nextbutton"
          onClick={() => {
            if (page === 3) {
              submitForm();
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page > 2 ? "Create poll" : "Next"}{"  "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon / Next">
              <path id="Vector" d="M13.2673 4.20889C12.9674 3.9232 12.4926 3.93475 12.2069 4.23467C11.9212 4.5346 11.9328 5.00933 12.2327 5.29502L18.4841 11.2496H3.75C3.33579 11.2496 3 11.5854 3 11.9996C3 12.4138 3.33579 12.7496 3.75 12.7496H18.4842L12.2327 18.7043C11.9328 18.99 11.9212 19.4648 12.2069 19.7647C12.4926 20.0646 12.9674 20.0762 13.2673 19.7905L20.6862 12.7238C20.8551 12.5629 20.9551 12.3576 20.9861 12.1443C20.9952 12.0975 21 12.0491 21 11.9996C21 11.9501 20.9952 11.9016 20.986 11.8547C20.955 11.6415 20.855 11.4364 20.6862 11.2756L13.2673 4.20889Z" fill="#212121"/>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}

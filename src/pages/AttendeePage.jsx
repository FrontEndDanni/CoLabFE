import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDisplay = ({ eventInfo }) => {
  return (
    <div className="modal-content">
      {eventInfo ? (
        <>
          <h1>{eventInfo[0][2]}</h1>
          <h3>{`Event Creator: ${eventInfo[0][0]}`}</h3>
          {eventInfo[0][4] != null && (
            <h3>{`Event Description: ${eventInfo[0][4]}`}</h3>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const DayTimeDisplay = ({
  questions,
  largest,
  eventInfo,
  setAttendeeData,
  attendeeData,
  clickedButton,
}) => {
  return (
    <>
      <div className="modal-content">
        <h3>Add your name to the poll</h3>
        <p>
          Add you name so the event creator knows who you are and then enter
          your vote!
        </p>
        <label htmlFor="email">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          deafultValue={attendeeData.inviteename}
          onChange={(e) => {
            setAttendeeData({ ...attendeeData, inviteename: e.target.value });
          }}
        />
        <br />

        <label htmlFor="email">Your Email(optional)</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email"
          deafultValue={attendeeData.inviteeemail}
          onChange={(e) => {
            setAttendeeData({ ...attendeeData, inviteeemail: e.target.value });
          }}
        />
        <br />
      </div>
      <div className="modal-content">
        {questions && (
          <>
            <p>
              Click on the time to mark your preference, then click the "Submit"
              button.
            </p>
            <p>Options: Choose one or more times</p>
            <h2>Question: Which days/times work best</h2>
            {Object.entries(questions).map(([date, times]) => (
              //loop through question indecies then in this thing we need the questions [0].toUpperCase() + date.slice[1]
              <>
                <h2>{date[0].toUpperCase() + date.slice(1)}</h2>
                {largest[date] && eventInfo ? (
                  <p>{largest[date]["daylength"]}</p>
                ) : (
                  <p>0</p>
                )}
                <p
                  style={{
                    height: "7px",
                    width: "100%",
                    background: "#FF000020",
                  }}
                ></p>

                {Object.entries(times).map(([time, answers]) => (
                  <div>
                    {eventInfo[0][3] == true ? (
                      <button
                        className="timeButton"
                        onClick={(e) => clickedButton(e, date, time)}
                      >
                        {time}
                      </button>
                    ) : (
                      <button
                        className="timeButton"
                        onClick={(e) => clickedButton(e, date, answers)}
                      >
                        {answers}
                      </button>
                    )}
                    {Object.entries(answers).map(([answer, responses]) => (
                      <>{responses[1] && <h5>{responses[1][0]}</h5>}</>
                    ))}
                  </div>
                ))}
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default function AttendeePage() {
  const param = useParams();
  const [eventInfo, setEventInfo] = useState(null);
  const [questionData, setQuestionData] = useState({});
  const [largestData, setLargestData] = useState({});
  const [attendeeData, setAttendeeData] = useState({});
  const [attendeePicks, setAttendeePicks] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.yourplanpal.com/api/getresults/${param.eventID}/False`
      ).then((resp) => resp.json());
      setQuestionData(data.questions);
      setEventInfo(data.event);
      setLargestData(data.largest);
      return(data)
    };

    const createAttendeeObj = async (data) => {
      const attendeeObject = {};
      let count = 0;
      for (const [day, times] of Object.entries(data.questions)) {
        for (const [time, answer] of Object.entries(times)) {
          if (data.event[0][3] == true) {
            attendeeObject[count] = {
              questionDate: day,
              questionTime: time,
              questionAnswer: false,
            };
            console.log(count);
          } else {
            attendeeObject[count] = {
              questionDate: day,
              questionTime: answer,
              questionAnswer: false,
            };
            console.log(count);
          }
          count = count + 1;
        }
      }
      return attendeeObject;
    };

    const getDaysTimes = async () => {
      const data = await fetchData();
      const result = await createAttendeeObj(data);
      setAttendeePicks(result);
    };
    getDaysTimes();
  }, [param.eventID]);

  useEffect(() => {
    if (attendeePicks) {
      setAttendeeData({
        inviteename: "",
        inviteeemail: "",
        attendeepicks: attendeePicks,
      });
      console.log(attendeeData);
    }
  }, [attendeePicks]);

  function clickedButton(e, date, time) {
    e.preventDefault();
    let attendeeObj = attendeeData.attendeepicks;
    Object.keys(attendeeObj).forEach((item) => {
      if (
        attendeeObj[item].questionDate == date &&
        attendeeObj[item].questionTime == time
      ) {
        if (attendeeObj[item].questionAnswer == false) {
          attendeeObj[item].questionAnswer = true;
        } else {
          attendeeObj[item].questionAnswer = false;
        }
      }
    });
    console.log(attendeeObj);
    setAttendeeData({ ...attendeeData, attendeepicks: attendeeObj });
  }

  function submitVote(e){
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestBody = JSON.stringify(attendeeData);
    fetch(`https://api.yourplanpal.com/api/pollresults/${param.eventID}`, {
      method: "POST",
      headers: myHeaders,
      body: requestBody,
    })




  }

  return (
    <div>
      <EventDisplay eventInfo={eventInfo}></EventDisplay>
      <DayTimeDisplay
        attendeeData={attendeeData}
        setAttendeeData={setAttendeeData}
        questions={questionData}
        largest={largestData}
        eventInfo={eventInfo}
        clickedButton={clickedButton}
      ></DayTimeDisplay>
      <button 
      onClick={(e)=>{submitVote(e)}}
      >Submit Results</button>
    </div>
  );
}

import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const EventDisplay = ({eventInfo}) =>{
return(
<div className="modal-content">

  {eventInfo ? 
    <>
    
    <h1>{eventInfo[0][2]}</h1>
    <h3>{`Event Creator: ${eventInfo[0][0]}`}</h3>
    {eventInfo[0][4] != null &&
    <h3>{`Event Description: ${eventInfo[0][4]}`}</h3>
    }
    </>
    :
    <></>
}
</div>
)

}

const LinkDisplay = ({eventInfo, param}) => {
return(
<div className="modal-content">
  <h2>Share your Poll with a Link</h2>
  <p>Copy the shareable link and share it with your guests on social media, with sms, or anyhow you like.</p>
  <h4>Share your link:</h4>
  <input value={`https://www.yourplanpal.com/pollresults/${param.eventID}/vote`}></input>
  <button>Copy to clipboard</button>


</div>
)
}


const DayTimeDisplay = ({ questions, largest }) => {
  return (
    <div className="modal-content">
      {questions && (
        <>
          <h2>Question: Which days/times work best</h2>
          {Object.entries(questions).map(([date, times]) => (
            //loop through question indecies then in this thing we need the questions [0].toUpperCase() + date.slice[1]
            <>
              <h2>{date}</h2>
              {largest ?
              <p>{largest[date]["daylength"]}</p>
              :
              <p>0</p>}
              <p
                style={{
                  height: "7px",
                  width: "100%",
                  background: "#FF000020",
                }}
              ></p>
              {Object.entries(times).map(([time, answers]) => (
              <div>
              <button className='timeButton'>{time}</button>
              {Object.entries(answers).map(([answer, responses])=>(       
                <h5>{responses[1][0]}</h5>
              ))}
              </div>

              
              ))}
            </>

          ))}
        </>
      )}
    </div>
  );
};

export default function PollResults() {
  const param = useParams();
  const [eventData, setEventData] = useState({});
  const [eventInfo, setEventInfo] = useState();
  const [questionData, setQuestionData] = useState({});
  const [largestData, setLargestData] = useState({});
  useEffect(() => {
    fetch(`https://api.yourplanpal.com/api/getresults/${param.eventID}/True`)
      .then((resp) => resp.json())
      .then((data) => {
        setEventData(data);
      });
  }, [param.eventID]);

  useEffect(() => {
    if (eventData) {
      setEventInfo(eventData.event);
      setQuestionData(eventData.questions);
      setLargestData(eventData.largest);
    }
  }, [eventData]);

  return (
    
    <div>
      <EventDisplay eventInfo={eventInfo}>

      </EventDisplay>
      <LinkDisplay eventInfo = {eventInfo}
      param = {param}>

      </LinkDisplay>
      <DayTimeDisplay
        questions={questionData}
        largest={largestData}
      ></DayTimeDisplay>
    </div>
  );
}

import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const DayTimeDisplay = ({questions})=>{
  
return(
    <>
    {/* {questions.map(({question})=>{
    //loop through question indecies then in this thing we need the questions      



    })} */}
    {/* <h2>{day[0].toUpperCase() + day.slice(1)}</h2>
    
    <p>0</p>
    <p style={{ height: "7px", width: "100%", background: "#FF000020" }}></p>
  {times.map((time) => (
      <button className='timeButton'>{time}</button>
  ))} */}
  </>
  ); 

}

export default function PollResults() {
const param = useParams()
const [eventData, setEventData] = useState({})
useEffect(()=>{ 
    fetch(`http://127.0.0.1:5000/api/getresults/13/False`)
    .then(resp => resp.json())
    .then(data => {
      setEventData(data);
     })




},[]);




  return (
    <div>
      {/* {!eventData != {}}{
      <DayTimeDisplay questions ={eventData}>
        
      </DayTimeDisplay>
} */}
    </div>
  )
}

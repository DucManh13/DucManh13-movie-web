import { useEffect, useState } from "react";
import axios from "axios";
import DateList from "./DateList";
import ScreeningList from './ScreeningList';

function Schedule(props) {
  const [activeDay,setActiveDay]=useState(-1);
  const [schedule,setSchedule]=useState();
  
  useEffect(()=>{
    let mounted=true;
    if(activeDay>=0){
      axios.get("https://app-screening-service.herokuapp.com/screening/?date_id="+activeDay) 
      .then(response => {
        if (mounted) 
          setSchedule(response.data);
      })
    .catch(err => console.log(err));
    }
    return ()=>{mounted=false;}
  },[activeDay]);
  
  return (
    <div className="container py-3 px-5 bg-light">
      <h3>Movie Schedule</h3>

      <DateList onReceiveActiveDay={(dateId)=>setActiveDay(dateId)}/>
      <hr/>
      {!schedule?null:schedule.movie.map((item,index)=>
        (<div className="row my-4" key={index}>
          <div className="col-sm-3">
            <img className="img-responsive w-100" src={item.data[0].poster} alt="Movie Poster"/>                  
          </div>  
          <div className="col-sm-9">
              <h4>{item.data[0].movie_name}</h4>
              <ScreeningList screenings={schedule.screening[index]}/>
          </div>  
        </div>))}
    </div>          
  );
}
  
export default Schedule;
  
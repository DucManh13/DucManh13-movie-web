import { useEffect, useState } from "react";
import  { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
import DateList from "./DateList";
import ScreeningList from './ScreeningList';

function Schedule(props) {
  const [activeDay,setActiveDay]=useState(-1);
  const [schedule,setSchedule]=useState();
  let { movieId } = useParams();

  useEffect(()=>{
    let mounted=true;
    if(activeDay>=0){
      axios.get("https://app-screening-service.herokuapp.com/screening/?date_id="+activeDay) 
      .then(response => {
        if (mounted) 
          setSchedule({
            movie:response.data.movie.filter((item)=>(item.data[0].movie_id===+movieId)),
            screening:response.data.screening.filter((item)=>(item[0].movie_id===+movieId))})
      })
    .catch(err => console.log(err));
    }
    return ()=>{mounted=false;}
  },[activeDay, movieId]);

  return (
    <div className="container py-3 px-5 bg-light">
      <h3>Movie Schedule</h3>
      <DateList onReceiveActiveDay={(dateId)=>setActiveDay(dateId)}/>
      <hr/>
      {!schedule?null:schedule.movie.length===0?"No screening scheduled for this day yet":
        <div className="row my-4">
          <div className="col-sm-3">
            <Link to={`/movie/${schedule.movie[0].data[0].movie_id}`}>
              <img className="img-responsive w-100" src={schedule.movie[0].data[0].poster} alt="Movie Poster"/>
            </Link>                  
          </div>  
          <div className="col-sm-9">
              <h4>{schedule.movie[0].data[0].movie_name}</h4>
              <ScreeningList screenings={schedule.screening[0]}/>
          </div>  
        </div>}
    </div>          
  );
}
  
export default Schedule;
  
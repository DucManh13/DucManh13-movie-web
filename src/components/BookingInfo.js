import axios from "axios";
import { useEffect, useState } from "react";

function BookingInfo(props) {
  
  const [movie,setMovie]=useState();
  const [screening,setScreening]=useState();
  useEffect(()=>{
    let mounted=true;
    axios.get('https://fbk-api-gateway.herokuapp.com/movie?id='+props.movieId) 
      .then(response => {
        if (mounted) setMovie(response.data.data[0]);
      })
    .catch(err => console.log(err));

    axios.get('https://fbk-api-gateway.herokuapp.com/screening/by-id?screening_id='+props.screeningId) 
      .then(response => {
        if (mounted) setScreening(response.data.data);
      })
    .catch(err => console.log(err));
    
    return ()=>{mounted=false;}
  },[props.movieId,props.screeningId]);

  return !(movie&&screening)?null:(
    <div>
      <hr className="row my-0"/>
      <div className="row mt-2">
        <h4 className="col-sm-5 font-orelega">Movie:</h4>
        <h4 className="col-sm-7 font-weight-normal">{movie.movie_name}</h4>
      </div>
      <div className="row mt-1">
        <h4 className="col-sm-5 font-orelega">Date:</h4>
        <h4 className="col-sm-7 font-weight-normal">{screening.date.slice(8,10)+'/'+screening.date.slice(5,7)+'/'+screening.date.slice(0,4)}</h4>
      </div>
      <div className="row mt-1">
        <h4 className="col-sm-5 font-orelega">Room:</h4>
        <h4 className="col-sm-7 font-weight-normal">{screening.room}</h4>
      </div>
      <div className="row mt-1">
        <h4 className="col-sm-5 font-orelega">Start time:</h4>
        <h4 className="col-sm-7 font-weight-normal">{screening.timeslot.slice(0,5)}</h4>
      </div>
      <div className="row mt-1">
        <h4 className="col-sm-5 font-orelega">Duration:</h4>
        <h4 className="col-sm-7 font-weight-normal">{movie.duration} minutes</h4>
      </div>  
    </div>
  );
}

export default BookingInfo;

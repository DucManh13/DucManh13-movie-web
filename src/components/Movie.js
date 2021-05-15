import  { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Movie(props) {
  
  const [data,setData]=useState();
  let { movieId } = useParams();

  useEffect(()=>{
    axios.get('https://fbk-api-gateway.herokuapp.com/movie/?id='+movieId) 
        .then(response => {
          setData(response.data.data[0]);
        })
    .catch(err => console.log(err));
    
  },[movieId]);

  return (
    <div className="container py-3 bg-light">
      {!data?null:(<div>
      <div className="row">
        <div className="col-sm-3">
        <img className="img-responsive w-100" src={data.poster} alt="Movie Poster"/>
        <Link to={`/schedule/${movieId}`}>
          <button className="btn btn-danger mt-2 w-100"><b>BOOKING</b></button> 
        </Link>
        </div>
        <div className="col-sm-9">
          <h3>{data.movie_name}</h3>
          <hr/>
          <h4>Genre: <small>{data.genre_name.join(', ')}</small></h4>
          <h4>Release date: <small>{data.release_date}</small></h4>
          <h4>Duration: <small>{data.duration} minutes</small></h4>
          <h4 className="text-justify">Description: <small>{data.description}</small></h4>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-7 offset-sm-3">
          <h4>Trailer:</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={data.trailer} title="Movie Trailer" allowFullScreen alt="Movie Trailer"></iframe>
          </div>
          
        </div>
      </div></div>)}  
    </div>        
  );
}

export default Movie;

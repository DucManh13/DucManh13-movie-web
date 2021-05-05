import  { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

function ListMovie(props) {
  const [list,setList]=useState();
  
  useEffect(()=>{
    let mounted=true;
    axios.get("https://app-movie-genre-service.herokuapp.com/movie") 
      .then(response => {
        if (mounted) setList(response.data.data);
      })
      .catch(err => console.log(err));
      
      return ()=>{mounted=false;}
  },[]);

  return (    
    <div className="container py-3 px-5 bg-light">
      <h3>Available Movies</h3>
      <hr/>
      {list==null?null:(
      <div className="row row-cols-md-3">
        {list.map((movie,index)=>
          (<div key={index} className="col pb-5">
            <div className="card ">
              <Link to={`/movie/${movie.movie_id}`}>
                <img className="card-img-top" src={movie.poster} alt="Movie Poster"/>
              </Link>    
              <div className="card-body bg-silver">
                <h4 className="card-title">{movie.name}</h4>
                <div className="card-text">
                  <h6>Genre: <small>{movie.genre_name.join(", ")}</small></h6>
                  <h6>Release date: <small>{movie.release_date}</small></h6>
                  <h6>Duration: <small>{movie.duration} minutes</small></h6>
                </div>
                <button className="btn btn-danger mt-2 w-100"><b>BOOKING</b></button> 
              </div>
            </div>    
          </div>))}
      </div>)}  
    </div>        
  );
}

export default ListMovie;
  
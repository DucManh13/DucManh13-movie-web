import  { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

function ListMovie({offset}) {
  const [list,setList]=useState();
  const [page,setPage]=useState();

  useEffect(()=>{
    let mounted=true;
    axios.get("https://fbk-api-gateway.herokuapp.com/movie") 
      .then(response => {
        if (mounted) {
          setList(response.data.data);
          setPage({max:Math.floor(response.data.data.length/12),current:0});
        }
      })
      .catch(err => console.log(err));
      
    return ()=>{mounted=false;}
  },[]);

  return (    
    <div className="container py-3 px-5 bg-light">
      <h3 className="py-2">Available Movies</h3>
      <hr className="mb-4"/>
      {!(list&&page)?<Spinner />:(
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
        {list.slice(page.current*12,(page.current+1)*12).map((movie,index)=>
          (<div key={index} className="col pb-5 px-4">
            <div className="card ">
              <Link to={`/movie/${movie.movie_id}`}>
                <img className="card-img-top" src={movie.poster} alt="Movie Poster"/>
              </Link>    
              <div className="card-body card-movie bg-silver d-flex flex-column">
                <h4 className="card-title">{movie.movie_name}</h4>
                <div className="card-text mb-auto overflow-auto">
                  <h5>Genre: <small>{movie.genre_name.join(", ")}</small></h5>
                  <h5>Release date: <small>{movie.release_date}</small></h5>
                  <h5>Duration: <small>{movie.duration} minutes</small></h5>
                </div>
                <Link to={`/schedule/${movie.movie_id}`}>
                  <button className="btn btn-danger mt-2 w-100"><b>BOOKING</b></button>
                </Link> 
              </div>
            </div>    
          </div>))}
      </div>)}
      {!(list&&page)?null:
        <Pagination page={page} setPage={setPage} offset={offset??0}/>}
    </div>        
  );
}

export default ListMovie;
  
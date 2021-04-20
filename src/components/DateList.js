import  { Link } from 'react-router-dom';

function DateList(props) {
    
  return (
    <div className="container py-3 px-5 bg-light">
      <h3>Available Movies</h3>
      <hr/>
      <div className="row row-cols-3">
        {movies.map((movie,index)=>
          (<div key={index} className="col pb-5">
            <div className="text-center">
              <Link to={`/movie/${movie.id}`}>
                <img className="img-responsive w-75" src={movie.image} alt="Movie Poster"/>
              </Link>                  
            </div>  
            <div className="w-75 bg-info mx-auto">
              <div className="pl-2 py-1">
                <h5>{movie.name}</h5>
                <h6>Genre: <small>{movie.genre.join(', ')}</small></h6>
                <h6>Release date: <small>{movie.date}</small></h6>
                <h6>Duration: <small>{movie.duration} minutes</small></h6>
              </div>
              <button className="btn btn-danger mt-2 w-100"><b>BOOKING</b></button> 
            </div>  
          </div>))}
      </div>  
    </div>        
  );
    }
    
    export default DateList;
  
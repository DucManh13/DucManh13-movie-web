

function Movie(props) {
  const movie={
    id:1,
    name:'Godzilla vs Kong',
    genre:['Action','Fantasy'],
    date:'24/03/2021',
    duration:113,
    image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
    trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
    desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
  }
    return (
      <div className="container py-3 bg-light">
        <div className="row">
          <div className="col-sm-3">
          <img className="img-responsive w-100" src={movie.image} alt="Movie Poster"/>
          <button className="btn btn-danger mt-2 w-100"><b>BOOKING</b></button> 
          </div>
          <div className="col-sm-9">
            <h3>{movie.name}</h3>
            <hr/>
            <h4>Genre: <small>{movie.genre.join(', ')}</small></h4>
            <h4>Release date: <small>{movie.date}</small></h4>
            <h4>Duration: <small>{movie.duration} minutes</small></h4>
            <h4 className="text-justify">Description: <small>{movie.desc}</small></h4>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-7 offset-sm-3">
            <h4>Trailer:</h4>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={movie.trailer} title="Movie Trailer" allowfullscreen></iframe>
            </div>
          </div>
        </div>  
      </div>        
    );
  }
  
  export default Movie;

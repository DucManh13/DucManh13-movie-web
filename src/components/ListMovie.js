import  { Link } from 'react-router-dom';

function ListMovie(props) {
  const movies=[
    {
      id:1,
      name:'Godzilla vs Kong',
      genre:['Action','Fantasy'],
      date:'24/03/2021',
      duration:113,
      image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
      trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
      desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
    },
    {
      id:2,
      name:'Godzilla vs Kong',
      genre:['Action','Fantasy'],
      date:'24/03/2021',
      duration:113,
      image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
      trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
      desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
    },
    {
      id:2,
      name:'Godzilla vs Kong',
      genre:['Action','Fantasy'],
      date:'24/03/2021',
      duration:113,
      image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
      trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
      desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
    },
    {
      id:2,
      name:'Godzilla vs Kong',
      genre:['Action','Fantasy'],
      date:'24/03/2021',
      duration:113,
      image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
      trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
      desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
    },
    {
      id:2,
      name:'Godzilla vs Kong',
      genre:['Action','Fantasy'],
      date:'24/03/2021',
      duration:113,
      image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
      trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
      desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
    },
    {
      id:2,
      name:'Godzilla vs Kong',
      genre:['Action','Fantasy'],
      date:'24/03/2021',
      duration:113,
      image:'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/o/godzilla_vs.jpg',
      trailer:'https://www.youtube-nocookie.com/embed/odM92ap8_c0',
      desc: 'Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans—instigated by unseen forces—is only the beginning of the mystery that lies deep within the core of the Earth.'
    },
  ];
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

export default ListMovie;
  
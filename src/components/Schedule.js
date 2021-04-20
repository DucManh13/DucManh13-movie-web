import DateList from "./DateList";
import ScreeningList from './ScreeningList';

function Schedule(props) {
  const schedule=[
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
      <h3>Movie Schedule</h3>

      <DateList/>
      <hr/>
      {schedule.map((movie,index)=>
        (<div className="row my-4" key={index}>
          <div className="col-sm-3">
            <img className="img-responsive w-100" src={movie.image} alt="Movie Poster"/>                  
          </div>  
          <div className="col-sm-9">
              <h4>{movie.name}</h4>
              <ScreeningList/>
          </div>  
        </div>))}
    </div>          
  );
}
  
export default Schedule;
  
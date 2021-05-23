import  { Link } from 'react-router-dom';

function ScreeningList(props) {
  
  const filterScreening=(screenings)=>{
    const time= new Date().toLocaleTimeString('en-GB');
    var temp= props.isToday?screenings.reduce((result,screening)=>{
      if (screening.started_at>=time)
        result.push(screening);
      return result;
    },[]):screenings;
    temp.sort((a,b)=>{
      if(a.started_at>b.started_at) return 1;
      else if(a.started_at<b.started_at) return -1;
      else return 0;}
    );
    return temp;
  }
  return (
    <div className="container pt-4 ">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-3">
        {filterScreening(props.screenings).map((screening,index)=>
          (<div key={index} className="col pb-3">
            <Link to={{ pathname: '/booking', state: { movieId: props.movieId, screeningId: screening.screening_id, price:screening.price} }}>
              <button className=" btn bg-white2 border w-100">
                <div className="s-4">{screening.started_at.slice(0,5)}</div>
              </button>
            </Link> 
          </div>))}
          
      </div>  
    </div>        
  );
}

export default ScreeningList;
  
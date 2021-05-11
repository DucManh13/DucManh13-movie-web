import  { Link } from 'react-router-dom';

function ScreeningList(props) {
  
  return (
    <div className="container pt-4 ">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-3">
        {props.screenings.sort((a,b)=>{
          if(a.started_at>b.started_at) return 1;
          else if(a.started_at<b.started_at) return -1;
          else return 0;}
          ).map((screening,index)=>
          (<div key={index} className="col pb-3">
            <Link to={{ pathname: '/booking', state: { screeningId: screening.screening_id, price:screening.price} }}>
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
  
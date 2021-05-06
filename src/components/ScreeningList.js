
function ScreeningList(props) {
  
  return (
    <div className="container pt-4 ">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-3">
        {props.screenings.map((screening,index)=>
          (<div key={index} className="col pb-3">
            <button className=" btn bg-white2 border w-100">
              <div className="s-4">{screening.started_at.slice(0,5)}</div>
            </button>    
          </div>))}
          
      </div>  
    </div>        
  );
}

export default ScreeningList;
  
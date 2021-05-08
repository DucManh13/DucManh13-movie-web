
function DateList(props) {
  return (
    <div className="container pt-4 px-5">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-sm-3 row-cols-2">
        {props.dates.map((date,index)=>
          (<div key={index} className="col pb-2">
            <button className={`btn ${date.date_id===props.activeDay?'btn-dark':'bg-white2 border'} w-100 `} 
              onClick={()=>props.onReceiveActiveDay(date.date_id)}>
              <div className="s-6">{date.day.slice(0,3)}</div>
              <div className="s-2">{date.date.slice(8,10)}{index===0||date.date.slice(8,10)==="01"?'/'+date.date.slice(5,7):''}</div>
            </button>    
          </div>))}          
      </div>  
    </div>        
  );
}

export default DateList;
  
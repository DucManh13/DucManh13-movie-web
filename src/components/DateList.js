import { useEffect, useState} from 'react';
import axios from "axios";

function DateList(props) {
  const [activeDay,setActiveDay]=useState(0);
  const [dates,setDates]=useState();

  useEffect(()=>{
    let mounted=true;
    axios.get("https://app-screening-service.herokuapp.com/date") 
      .then(response => {
        if (mounted) {
          setDates(response.data.data);
          handleActiveDay(0,response.data.data[0].date_id);
        }  
      })
      .catch(err => console.log(err));
    
    return ()=>{mounted=false;}
  },[]);
  
  const handleActiveDay=(index,dateId)=>{
    props.onReceiveActiveDay(dateId);
    setActiveDay(index);
  }
  return !dates?null:(
    <div className="container pt-4 px-5">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-3">
        {dates.map((date,index)=>
          (<div key={index} className="col pb-2">
            <button className={`btn ${index===activeDay?'btn-dark':'bg-white2 border'} w-100`} onClick={()=>handleActiveDay(index,date.date_id)}>
              <div className="s-6">{date.day.slice(0,3)}</div>
              <div className="s-2">{date.date.slice(8,10)}{index===0||date.date.slice(8,10)==="01"?'/'+date.date.slice(5,7):''}</div>
            </button>    
          </div>))}          
      </div>  
    </div>        
  );
    }
    
    export default DateList;
  
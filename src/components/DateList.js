import { useState} from 'react';

function DateList(props) {
  const [activeDay,setActiveDay]=useState(0);
  const dates=[
    {
      day:'Mon',
      num:19,
      month:4
    },
    {
      day:'Tue',
      num:20,
      month:4
    },
    {
      day:'Wed',
      num:21,
      month:4
    },
    {
      day:'Thu',
      num:22,
      month:4
    },
    {
      day:'Fri',
      num:23,
      month:4
    },
    {
      day:'Sat',
      num:24,
      month:4
    },
    {
      day:'Sun',
      num:25,
      month:4
    },
    
  ]
  return (
    <div className="container pt-4 px-5">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-3">
        {dates.map((date,index)=>
          (<div key={index} className="col pb-2">
            <button className={`btn ${index===activeDay?'btn-dark':'bg-white2 border'} w-100`} onClick={()=>setActiveDay(index)}>
              <div className="s-6">{date.day}</div>
              <div className="s-2">{date.num}{index===0||date.num===1?'/'+date.month:''}</div>
            </button>    
          </div>))}
          
      </div>  
    </div>        
  );
    }
    
    export default DateList;
  
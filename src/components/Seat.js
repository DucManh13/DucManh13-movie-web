import { useState} from 'react';

function Seat(props) {
  const [state,setState]=useState(false);

  const toggleState=()=>{
      setState(!state);
  }
  return props.status===true?(
    <div className={`bg-white2 border pointer user-select-none ${state?'bg-success text-white':''}`} onClick={toggleState}>{props.number}</div>)
    :(<div className="bg-danger border user-select-none text-white">{props.number}</div>);
}

export default Seat;
  
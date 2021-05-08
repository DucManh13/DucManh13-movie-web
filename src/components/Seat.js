
function Seat(props) {
  const toggleState=()=>{
      props.onReceiveClick(props.number);
  }
  return props.status>=0?(
    <div className={`bg-seat border pointer user-select-none ${props.status===1?'bg-success text-white':''}`} 
      onClick={toggleState}>{props.number}</div>)
    :(<div className="bg-danger border user-select-none text-white">{props.number}</div>);
}

export default Seat;
  
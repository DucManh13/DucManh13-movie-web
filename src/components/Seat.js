
function Seat(props) {
  const toggleState=()=>{
      props.onReceiveClick(props.number);
  }
  const seatDisplay=(number)=>{
    return number%10===0?
      String.fromCharCode(Math.floor(number/10)+64)+10
      :String.fromCharCode(Math.floor(number/10)+65)+number%10;
  }
  return props.status>=0?(
    <div className={`bg-seat seat-text border user-select-none ${props.status===1?'bg-success text-white':''} ${props.check?'nohover':'pointer'}`} 
      onClick={!props.check?toggleState:null}>{seatDisplay(props.number)}</div>)
    :(<div className="bg-danger seat-text border user-select-none text-white">{seatDisplay(props.number)}</div>);
}

export default Seat;
  
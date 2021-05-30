import { useState,useEffect } from "react";
import axios from "axios";
import Payment from "./Payment";
import SeatMap from './SeatMap';
import { useHistory, useLocation } from "react-router";

function Booking(props) {
  const state  = useLocation().state;
  const history = useHistory();
  
  const [user,setUser]=useState();
  const [price,setPrice]=useState();
  const [seats,setSeats]=useState();
  const [ticket,setTicket]=useState(0);
  const [check,setCheck]=useState(false);
  
  useEffect(()=>{    
    let mounted=true;
    if(state){
      setPrice(state.price);
      axios.get("https://fbk-api-gateway.herokuapp.com/tickets?screening_id="+state.screeningId, { headers: {"Authorization" : `Bearer ${props.token}`} }) 
        .then(response => {
          if (mounted) {
            console.log(response.data.data);
            var temp=Array(101).fill(0);
            response.data.data.forEach(element=>{temp[element.seatNumber]=-1});
            setSeats(temp);
            }
        })
        .catch(err => console.log(err));

      axios.get("https://myplsapp.herokuapp.com/auth/profile", { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      .then(response => {
        if (mounted) 
          setUser({
            id:response.data.data.id,
            email:response.data.data.userDto.email});
      })
      .catch(err => console.log(err));    
    }   
    else history.push("/");

    return ()=>{mounted=false;}
  },[props.token,state,history]);

  const handleTicket=(seat)=>{
    var temp=seats.slice();
    temp[seat]=(temp[seat]===1)?0:1;
    setTicket(temp[seat]===1?ticket+1:ticket-1);
    setSeats(temp);
  }
  const handleReset=()=>{
    var temp=seats.slice();
    temp.forEach((value,index,array)=>{if (value===1) array[index]=0;});
    setTicket(0);
    setSeats(temp);
  }
  
  return (
    <div className="container bg-light py-3 px-5">
      <h3>Booking</h3>
      <hr/>
      {!(seats&&user)?null:<div className="row py-4">
        <div className="col-lg-5 col-10 offset-1">
          <SeatMap seats={seats} check={check} handleTicket={handleTicket}/>
        </div>
        <div className="col-lg-5 col-10 offset-1 offset-lg-0 ">
          <div className="container bg-silver p-1 border border-secondary border-2 h-100">
            <div className="text-center mb-3 py-1 bg-dark text-white"><h4>Booking Information</h4></div>
            <div className="row">
              <h4 className="col-sm-5 offset-1">Ticket price:</h4>
              <h4 className="col-sm-6">{price} USD</h4>
            </div>
            <div className="row mt-2">
              <h4 className="col-sm-5 offset-1">Tickets:</h4>
              <h4 className="col-sm-6">{ticket}</h4>
            </div>
            <div className="row mt-2">
              <h4 className="col-sm-5 offset-1">Total amount:</h4>
              <h4 className="col-sm-6">{ticket*price} USD</h4>
            </div>
            {!check?<div className="text-center mt-4">
              <button type="button" className="btn btn-danger mr-2 btn-lg" disabled={!ticket} onClick={()=>setCheck(true)}>
                Confirm
              </button>
              <button type="button" className="btn btn-lg btn-secondary" onClick={handleReset}>Reset</button>
            </div>:
            <div className="text-center mt-4 mx-4">
              <Payment seats={seats} ticket={ticket} price={price} user={user} movieId={state.movieId} 
                screeningId={state.screeningId} token={props.token} onFinish={()=>setCheck(false)}/>
              <button type="button" className="btn btn-lg btn-secondary" onClick={()=>setCheck(false)}>Cancel</button>
            </div>}
          </div>              
        </div>
      </div>} 
    </div>        
  );
}

export default Booking;


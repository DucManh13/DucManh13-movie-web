import { useState,useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";
import Payment from "./Payment";
import { useHistory, useLocation } from "react-router";

function Booking(props) {
  const state  = useLocation().state;
  const history = useHistory();

  const rows=[0,1,2,3,4,5,6,7,8,9]
  const cols=[1,2,3,4,5,6,7,8,9,10]
  const [price,setPrice]=useState();
  const [seats,setSeats]=useState();
  const [ticket,setTicket]=useState(0);
  const [check,setCheck]=useState(false);
  
  useEffect(()=>{    
    let mounted=true;
    if(state){
      setPrice(state.price);
      // axios.get("https://fbooking-service.herokuapp.com/tickets?screening_id="+state.screeningId, { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      //   .then(response => {
      //     if (mounted) {
      //       console.log(state.screeningId);
      //       var temp=Array(101).fill(0);
      //       response.data.forEach(element=>{temp[element.seatNumber]=1});
      //       setSeats(temp);
      //       }
      //   })
      //   .catch(err => console.log(err));}
      axios.get("https://fbk-api-gateway.herokuapp.com/tickets", { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpZCI6MzksInBlcm1pc3Npb24iOnsiMSI6IkNSRUFURSIsIjIiOiJSRUFEIiwiMyI6IlVQREFURSIsIjQiOiJERUxFVEUifSwiaWF0IjoxNjIwNjI2MDMwLCJleHAiOjE2MzA5ODI0MzB9.vR0EDk9LSjFkwcNvEOSndZJ8cnJOyHS7gBSmxU9TbYI`} }) 
        .then(response => {
          if (mounted) {
            console.log(state.screeningId);
            }
        })
        .catch(err => console.log(err));}
        
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
      {!seats?null:<div className="row py-4">
        <div className="col-lg-5 col-10 offset-1">
          <div className="container border border-danger border-2 py-2 bg-silver text-center">
            <div className="container bg-dark text-light mb-4">
              Screen
            </div>
            {rows.map((row,r_index)=>
              (<div className="row mb-1" key={r_index}>
                <div className="offset-sm-1"></div>
                {cols.map((col,c_index)=>
                  (<div className="col p-0" key={c_index}>
                      <Seat number={row*10+col} status={seats[row*10+col]} onReceiveClick={handleTicket}/>
                  </div>))}
                  <div className="offset-sm-1"></div>
              </div>))}
          </div>
        </div>
        <div className="col-lg-5 col-10 offset-1 offset-lg-0 ">
          <div className="container bg-silver p-1 border border-secondary border-2 h-100">
            <div className="text-center mb-3 py-1 bg-dark text-white"><h4>Booking Information</h4></div>
            <div className="row">
              <h4 className="col-sm-5 offset-1">Ticket price:</h4>
              <h4 className="col-sm-6">{price}</h4>
            </div>
            <div className="row mt-2">
              <h4 className="col-sm-5 offset-1">Tickets:</h4>
              <h4 className="col-sm-6">{ticket}</h4>
            </div>
            <div className="row mt-2">
              <h4 className="col-sm-5 offset-1">Total amount:</h4>
              <h4 className="col-sm-6">{ticket*price}</h4>
            </div>
            <div className="text-center mt-4">
              <button type="button" className="btn btn-danger mr-2 btn-lg" data-toggle="modal" data-target="#modelId" disabled={!ticket} onClick={()=>setCheck(true)}>
                Confirm
              </button>
              <div className="modal fade" id="modelId"  data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog" >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Payment</h5>
                        <button type="button" className="close" data-dismiss="modal" onClick={()=>setCheck(false)}>
                          &times;
                        </button>
                    </div>
                    <div className="modal-body">
                    {check?<Payment seats={seats} ticket={ticket} price={price}/>:null}
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-lg btn-secondary" onClick={handleReset}>Reset</button>
            </div>    
          </div>              
        </div>
      </div>} 
    </div>        
  );
}

export default Booking;


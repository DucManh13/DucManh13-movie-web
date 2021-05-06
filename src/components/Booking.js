import Seat from "./Seat";
import  { Link } from 'react-router-dom';
import { useState } from "react";

function Booking(props) {
  const rows=[0,1,2,3,4,5,6,7,8,9]
  const cols=[1,2,3,4,5,6,7,8,9,10]
  const price=50000;
  const [seats,setSeats]=useState(Array(101).fill(0));
  const [ticket,setTicket]=useState(0);
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
      <div className="row py-4">
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
            <div className="row">
              <h4 className="col-sm-5 offset-1">Tickets:</h4>
              <h4 className="col-sm-6">{ticket}</h4>
            </div>
            <div className="row">
              <h4 className="col-sm-5 offset-1">Total amount:</h4>
              <h4 className="col-sm-6">{ticket*price}</h4>
            </div>
            <div className="text-center mt-4">
              <Link to="/editprofile">
                <button type="button" className="btn btn-lg btn-danger ">Confirm</button>
              </Link>
              <button type="button" className="btn btn-lg ml-1 btn-secondary" onClick={handleReset}>Reset</button>
            </div>    
          </div>              
        </div>
      </div>     
    </div>        
  );
}

export default Booking;

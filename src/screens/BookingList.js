import axios from "axios";
import { useEffect, useState } from "react";
import BookingInfo from "../components/BookingInfo";
import Pagination from "../components/Pagination";
import SeatMap from '../components/SeatMap';
import Spinner from '../components/Spinner';

function BookingList(props) {
  const [list,setList]=useState();
  const [id,setId]=useState();
  const [page,setPage]=useState();
  useEffect(()=>{
    let mounted=true;
    axios.get("https://myplsapp.herokuapp.com/auth/profile", { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      .then(response => {
        if (mounted) setId(response.data.data.id);
      })
      .catch(err => console.log(err));   
    
    return ()=>{mounted=false;}
  },[props.token]);

  useEffect(()=>{
    let mounted=true;
    if(id){
      axios.get('https://fbk-api-gateway.herokuapp.com/bookings/mine?user_id='+id, { headers: {"Authorization" : `Bearer ${props.token}`} }) 
          .then(response => {
            if (mounted) {
              setList(response.data.data.reverse());console.log(response.data.data);
              setPage({max:Math.floor(response.data.data.length/5),current:0});
            }
          })
      .catch(err => console.log(err));
    }
    return ()=>{mounted=false;}
  },[props.token,id]);
  
  const createSeats=(tickets)=>{
    var temp=Array(101).fill(0);
    tickets.forEach(element=>{temp[element.seatNumber]=1});
    return temp;
  }
  
  return (
    <div className="container py-3 px-5 bg-light">
      <h2>Booking List</h2>
      <hr/>
      {!(list&&page)?<Spinner />:
        list.slice(page.current*5,(page.current+1)*5).map((booking,index)=>(
        <div className="container py-4 px-5 mb-3 bg-dark" key={index}>
          <div className="row">    
            <div className="col-md-6 bg-silver border border-danger border-2">
              <h4 className="mt-2 font-orelega">Booking ID:</h4>
              <h5 className="font-weight-normal">{booking.code}</h5>
              <hr className="row my-0"/>
              <div className="row mt-2">
                <h4 className="col-sm-5 font-orelega">Total:</h4>
                <h4 className="col-sm-6 font-weight-normal">{booking.amount} USD</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5 font-orelega">Seat count:</h4>
                <h4 className="col-sm-6 font-weight-normal">{booking.tickets.length} seat(s)</h4>
              </div>
              <BookingInfo movieId={booking.movieId} screeningId={booking.tickets[0].screeningId}/>
            </div>
            <div className="col-md-6 px-0">
              <SeatMap seats={createSeats(booking.tickets)} check={true}/>
            </div>
          </div>
        </div>))}
      {!(list&&page)?null:
        <Pagination page={page} setPage={setPage} offset={0}/>}
    </div>
  );
}

export default BookingList;
  
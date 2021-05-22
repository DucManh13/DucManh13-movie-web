import  { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import SeatMap from './SeatMap';

function BookingList(props) {
  const [list,setList]=useState();
  
  useEffect(()=>{
    let mounted=true;
    
      return ()=>{mounted=false;}
  },[]);

  return (
    <div className="container py-3 px-5 bg-light">
      <h2>Booking List</h2>
      <hr/>
      <div className="container py-3 px-5 bg-dark">
        <h3 className="text-light my-3">Booking Info</h3>
        <div className="row">    
          <div className="col-md-6 bg-silver border border-danger border-2">
            <div className="row">
                <h4 className="col-sm-5">Booking ID:</h4>
                <h4 className="col-sm-6">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Username:</h4>
                <h4 className="col-sm-6">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Email:</h4>
                <h4 className="col-sm-6">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Total charge:</h4>
                <h4 className="col-sm-6">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Seat count:</h4>
                <h4 className="col-sm-6">{12345}</h4>
              </div>
          </div>
          <div className="col-md-6 bg-silver border border-danger border-2">
            <div className="row">
                <h4 className="col-sm-5">Movie:</h4>
                <h4 className="col-sm-7">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Date:</h4>
                <h4 className="col-sm-7">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Start time:</h4>
                <h4 className="col-sm-7">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Room:</h4>
                <h4 className="col-sm-7">{12345}</h4>
              </div>
              <div className="row mt-2">
                <h4 className="col-sm-5">Duration:</h4>
                <h4 className="col-sm-7">{12345}</h4>
              </div>
          </div>
        </div>
        <h3 className="text-light my-3">Seat Details</h3>
        <div className="row">    
          <div className="col-md-6">
            <SeatMap/>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default BookingList;
  
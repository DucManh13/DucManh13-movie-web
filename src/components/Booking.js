import Seat from "./Seat";
import  { Link } from 'react-router-dom';

function Booking(props) {
  const rows=[0,1,2,3,4,5,6,7,8,9]
  const seats=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="container bg-light py-3 px-5">
      <h3>Booking</h3>
      <hr/>
      <div className="row py-4">
        <div className="col-sm-5 offset-1">
          <div className="container border border-danger border-2 p-2 bg-silver text-center">
            <div className="container bg-dark text-light mb-3">
              Screen
            </div>
            {rows.map((row,r_index)=>
              (<div className="row mb-2" key={r_index}>
                <div className="offset-sm-1"></div>
                  <div className=""></div>
                {seats.map((seat,s_index)=>
                  (<div className="col p-0" key={s_index}>
                      <Seat number={row*10+seat} status={true}/>
                  </div>))}
                  <div className="offset-sm-1"></div>
              </div>))}
          </div>
        </div>
        <div className="col-sm-5 bg-silver p-1 border border-secondary border-2">
          <div className="text-center mb-3 py-1 bg-dark text-white"><h4>Booking Information</h4></div>
          <div className="row">
            <h4 className="col-sm-5 offset-1">Ticket price:</h4>
            <h4 className="col-sm-6">{1111}</h4>
          </div>
          <div className="row">
            <h4 className="col-sm-5 offset-1">Tickets:</h4>
            <h4 className="col-sm-6">{1111}</h4>
          </div>
          <div className="row">
            <h4 className="col-sm-5 offset-1">Total amount:</h4>
            <h4 className="col-sm-6">{111111}</h4>
          </div>
          <div className="text-center mt-4">
            <Link to="/editprofile">
              <button type="button" className="btn btn-lg btn-danger ">Confirm</button>
            </Link>
            <button type="button" className="btn btn-lg ml-1 btn-secondary" >Reset</button>
          </div>              
        </div>
      </div>     
    </div>        
  );
}

export default Booking;

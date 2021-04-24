

function Booking(props) {
  const rows=[0,1,2,3,4,5,6,7,8,9]
  const seats=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="container bg-light py-3">
      <h3>Booking</h3>
      <hr/>
      <div className="row">
        <div className="col-sm-5">
          <div className="container border border-danger p-2 text-center">
            {rows.map((row,rindex)=>
              (<div className="row mb-2" key={rindex}>
                <div className="offset-sm-1"></div>
                  <div className=""></div>
                {seats.map((seat,sindex)=>
                  (<div className="col p-0" key={sindex}>
                      <div className=" bg-white2 border">{row*10+seat}</div>
                  </div>))}
                  <div className="offset-sm-1"></div>
              </div>))}
          </div>
        </div>
      </div>     
    </div>        
  );
}

export default Booking;

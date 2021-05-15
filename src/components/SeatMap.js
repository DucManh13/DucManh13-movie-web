import Seat from "./Seat";

function SeatMap({seats,check,handleTicket}) {
  const rows=[0,1,2,3,4,5,6,7,8,9];
  const cols=[1,2,3,4,5,6,7,8,9,10];
  
  return (
    <div className="container border border-danger border-2 py-2 bg-silver text-center">
      <div className="container bg-dark text-light mb-4">
        Screen
      </div>
      {rows.map((row,r_index)=>
        (<div className="row mb-1" key={r_index}>
          <div className="offset-sm-1"></div>
          {cols.map((col,c_index)=>
            (<div className="col p-0" key={c_index}>
                <Seat number={row*10+col} status={1} check={true} onReceiveClick={handleTicket}/>
            </div>))}
            <div className="offset-sm-1"></div>
        </div>))}
    </div>
  );
}

export default SeatMap;
  
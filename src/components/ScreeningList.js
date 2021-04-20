
function ScreeningList(props) {
  const screenings=[
    {
      time:'08:00',
    },
    {
      time:'10:00',
    },
    {
      time:'12:00',
    },  
    {
      time:'14:00',
    },
    {
      time:'16:00',
    },
    {
      time:'18:00',
    },
    {
      time:'20:00',
    },
    {
      time:'22:00',
    }
  ]
  return (
    <div className="container pt-4 ">
      <div className="row row-cols-6">
        {screenings.map((screening,index)=>
          (<div key={index} className="col pb-3">
            <button className=" btn bg-white2 border w-100">
              <div className="s-4">{screening.time}</div>
            </button>    
          </div>))}
          
      </div>  
    </div>        
  );
}

export default ScreeningList;
  
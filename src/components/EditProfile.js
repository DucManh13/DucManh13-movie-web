import { useState } from "react";


function EditProfile(props) {
  const [state,setState]=useState({
    username: "",
    password: "",
    name: "",
    email: "",
    address: ""
  });
  const [alertDisplay,setAlertDisplay]=useState(false);

  const handleChange=(event)=>{
    var {name,value}=event.target;
    setState( prevState => ({
      ...prevState,
      [name] : value
    }));
    setAlertDisplay(false);
  };
  const handleReset=()=>{
    setState({
      username: "",
      password: "",
      name: "",
      email: "",
      address: ""
    });
    setAlertDisplay(false);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.username===""||state.password===""||state.name===""||state.email===""||state.address==="") setAlertDisplay(true);
    else{

    }
  }  
  return (
    <div className="container py-3 px-5 bg-light ">
      <form onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-user text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="username" value={state.username} onChange={handleChange} placeholder="Username"/>
            </div>
            <div className="form-group row pt-1">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-lock text-danger"></i></label>
              <input type="password"
                className="form-control col-sm-8" name="password" value={state.password} onChange={handleChange} placeholder="Password"/>
            </div>
            <hr/>
            <div className="form-group row pt-1">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-portrait text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="name" value={state.name} onChange={handleChange} placeholder="Name"/>
            </div>
            <div className="form-group row pt-1">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-envelope text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
            </div>
            <div className="form-group row pt-1">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-home text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="address" value={state.address} onChange={handleChange} placeholder="Address"/>
            </div>
            {alertDisplay===true?<p className="text-danger">Please enter all information</p>:''}
            <div className="text-center">
                <button type="submit" className="btn btn-lg btn-danger mt-2" >Submit</button>
                <button type="button" className="btn btn-lg btn-secondary mt-2 ml-2" onClick={handleReset}>Reset</button>
            </div>
          </form>
    </div>        
  );
}

export default EditProfile;

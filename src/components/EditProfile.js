import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function EditProfile(props) {
  const [state,setState]=useState();
  const [message,setMessage]=useState("");
  const history = useHistory();

  useEffect(()=>{
    axios.get("https://myplsapp.herokuapp.com/auth/profile", { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      .then(response => {
        setState({
          username:response.data.data.username,
          id:response.data.data.id,
          name:response.data.data.userDto.name,
          age:response.data.data.userDto.age,
          email:response.data.data.userDto.email,
          address:response.data.data.userDto.address});
      })
    .catch(err => console.log(err));
    
  },[props.token]);

  const handleChange=(event)=>{
    var {name,value}=event.target;
    setState( prevState => ({
      ...prevState,
      [name] : value
    }));
    setMessage("");
  };

  const handleReset=()=>{
    setState({...state,
      name: "",
      age:"",
      email: "",
      address: ""
    });
    setMessage("");
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.name===""||state.age===""||state.email===""||state.address==="")
      setMessage("Please enter all information!");
    else{
      setMessage("Please wait...");
      var url="https://myplsapp.herokuapp.com/rest-account/editUserInfor";
      let info = {
        id : state.id,
        userDto: {
          address: state.address,
          age: state.age,
          email: state.email,
          name: state.name
        },
        username: state.username
      }
      axios.put(url,info,{ headers: {"Authorization" : `Bearer ${props.token}`} })
        .then((response) => {
          history.push("/profile");
        })
        .catch(error => {
          if(error.response.data)
            setMessage(error.response.data.message);
        });
    }
  }  
  return (
    <div className="container py-3 px-5 bg-light ">
      <h2>Edit Profile</h2>
      <hr/>
      {!state?<div className="text-center"><div className="spinner-border"/></div>:
      (<form onSubmit={handleSubmit}>            
        <div className="form-group row">
          <label htmlFor="" className="col-sm-1 offset-sm-2 mt-1"><i className="fas fa-user text-danger"></i></label>
          <input type="text"
            className="form-control col-sm-6" name="username" value={state.username} disabled onChange={handleChange} placeholder="Username"/>
        </div>
        <div className="form-group row pt-1">
          <label htmlFor="" className="col-sm-1 offset-sm-2 mt-1"><i className="fas fa-portrait text-danger"></i></label>
          <input type="text"
            className="form-control col-sm-6" name="name" value={state.name} onChange={handleChange} placeholder="Name"/>
        </div>
        <div className="form-group row pt-1">
          <label htmlFor="" className="col-sm-1 offset-sm-2 mt-1"><i className="fas fa-calendar-alt text-danger"></i></label>
          <input type="number"
            className="form-control col-sm-6" name="age" value={state.age} onChange={handleChange} placeholder="Age"/>
        </div>
        <div className="form-group row pt-1">
          <label htmlFor="" className="col-sm-1 offset-sm-2 mt-1"><i className="fas fa-envelope text-danger"></i></label>
          <input type="text"
            className="form-control col-sm-6" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
        </div>
        <div className="form-group row pt-1">
          <label htmlFor="" className="col-sm-1 offset-sm-2 mt-1"><i className="fas fa-home text-danger"></i></label>
          <input type="text"
            className="form-control col-sm-6" name="address" value={state.address} onChange={handleChange} placeholder="Address"/>
        </div>
        {message===""?null:<div className="alert alert-danger mx-5">
          {message==="Please wait..."?<div className="spinner-border spinner-border-sm mr-2"/>:null}
          <strong>{message}</strong></div>}
        <div className="text-center">
            <button type="submit" className="btn btn-lg btn-danger mt-2" >Submit</button>
            <button type="button" className="btn btn-lg btn-secondary mt-2 ml-2" onClick={handleReset}>Reset</button>
        </div>
      </form>)}
    </div>        
  );
}

export default EditProfile;

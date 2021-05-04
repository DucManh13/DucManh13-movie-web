import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup(props) {
  const [state,setState]=useState({
    username: "",
    password: "",
    name: "",
    age: "",
    email: "",
    address: ""
  });
  const [message,setMessage]=useState("");
  const history = useHistory();

  const handleChange=(event)=>{
    var {name,value}=event.target;
    setState( prevState => ({
      ...prevState,
      [name] : value
    }));
    setMessage("");
  };
  const handleReset=()=>{
    setState({
      username: "",
      password: "",
      name: "",
      age: "",
      email: "",
      address: ""
    });
    setMessage("");
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.username===""||state.password===""||state.name===""||state.age===""||state.email===""||state.address==="") 
      setMessage("Please enter all information!");
    else{
      setMessage("Signing up...please wait");
      var url="https://myplsapp.herokuapp.com/auth/register";
      let info = {
        password : state.password,
        roles: [
          {
            id:3,
          }
        ],
        userDto: {
          address: state.address,
          age: state.age,
          email: state.email,
          name: state.name
        },
        username: state.username
      }
      axios.post(url,info)
        .then((response) => {
          alert("Sign up successfully");
          history.push("/login");
        })
        .catch(error => {
          if(error.response.data)
            setMessage(error.response.data.message);
        });
    }
  }
  return (
    <div className="container mt-4 text-center">
      <div className="row">
        <div className="col-sm-6 pb-2 bg-light">
          <form onSubmit={handleSubmit}>
            <h2 className="mt-3 pb-1 text-danger ">SIGN UP</h2>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-user text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="username" value={state.username} onChange={handleChange} placeholder="Username"/>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-lock text-danger"></i></label>
              <input type="password"
                className="form-control col-sm-8" name="password" value={state.password} onChange={handleChange} placeholder="Password"/>
            </div>
            <hr/>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-portrait text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="name" value={state.name} onChange={handleChange} placeholder="Name"/>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-calendar-alt text-danger"></i></label>
              <input type="number"
                className="form-control col-sm-8" name="age" value={state.age} onChange={handleChange} placeholder="Age"/>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-envelope text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-home text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="address" value={state.address} onChange={handleChange} placeholder="Address"/>
            </div>
            {message!==""?<p className="text-danger">{message}</p>:''}
            <button type="submit" className="btn btn-lg btn-danger mt-1" >Sign up</button>
            <button type="button" className="btn btn-lg btn-secondary mt-1 ml-2" onClick={handleReset}>Reset</button>
          </form>  
        </div>
        <div className="col-sm-6">
          <img src="img_movie.jpg" className="img-responsive w-100" alt=""/>
        </div>          
      </div>
    </div>        
  );
}

export default Signup;

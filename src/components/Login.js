import { useState } from "react";
import axios from "axios";
import  { Link } from 'react-router-dom';

function Login(props) {
  const [state,setState]=useState({
    username: "",
    password: "",
  });
  const [alert,setAlert]=useState("");
  
  const handleChange=(event)=>{
    var {name,value}=event.target;
    setState( prevState => ({
      ...prevState,
      [name] : value
    }));
    setAlert("");
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.username===""||state.password==="") 
      setAlert("Please enter your username and password!");
    else{
      var url="https://myplsapp.herokuapp.com/auth/login";
      axios.post(url,state)
        .then(response => {
          //console.log(response);
          props.onReceiveToken(response.data.data.token);          
        })
        .catch(error => {
          //console.log(error);
          if(error.response.data.status==401)
            setAlert(error.response.data.message);
        });
    }
  }
  return (
    <div className="container mt-4 text-center">
      <div className="row">
        <div className="col-sm-6 bg-light">
          <form onSubmit={handleSubmit}>
            <h2 className="mt-5 py-3 text-danger ">LOGIN</h2>
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
            {alert!==""?<p className="text-danger">{alert}</p>:''}
            <button type="submit" className="btn btn-lg btn-danger mt-2" >Log in</button>
            <Link to="/signup">
              <button type="button" className="btn btn-lg btn-secondary ml-2 mt-2">Sign up</button>
            </Link>
          </form>  
        </div>
        <div className="col-sm-6">
          <img src="img_movie.jpg" className="img-responsive w-100" alt=""/>
        </div>          
      </div>
    </div>        
  );
  }
  
  export default Login;

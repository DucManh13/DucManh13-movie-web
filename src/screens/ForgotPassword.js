import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ForgotPassword(props) {
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const history = useHistory();

  const handleChange=(event)=>{
    setEmail(event.target.value)
    setMessage("");
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(email==="")
      setMessage("Please enter your email!");
    else{
      setMessage("Please wait...");
      var url="https://myplsapp.herokuapp.com/auth/sendPass";

      axios.post(url,email,{ headers: {"Content-Type" : "text/plain"} })
        .then((response) => {
          alert("Check your email for a link to get new password")
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
        <div className="col-sm-6 bg-light">
          <form onSubmit={handleSubmit}>
            <h2 className="mt-5 pt-3 pb-4 text-danger ">Forgot password?</h2>
            <h5><small>We will send a link to your email to help you get new password</small></h5>
            <div className="form-group row mt-4">
              <label htmlFor="" className="col-sm-1 offset-sm-1 mt-1"><i className="fas fa-envelope text-danger"></i></label>
              <input type="text"
                className="form-control col-sm-8" name="email" value={email} onChange={handleChange} placeholder="Enter your email"/>
            </div>
            {message===""?null:<div className="alert alert-danger mx-5">
              {message==="Please wait..."?<div className="spinner-border spinner-border-sm mr-2"/>:null}
              <strong>{message}</strong></div>}
            <button type="submit" className="btn btn-lg btn-danger mt-2" >Confirm</button>
          </form>
        </div>
        <div className="col-sm-6 pl-2 pr-1">
          <img src="img_movie.jpg" className="img-responsive w-100" alt=""/>
        </div>          
      </div>
    </div>   
  );
}

export default ForgotPassword;

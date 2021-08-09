import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from '../components/Spinner';

function ChangePassword(props) {
  const [state,setState]=useState();
  const [message,setMessage]=useState("");
  const history = useHistory();

  useEffect(()=>{
    axios.get("https://myplsapp.herokuapp.com/auth/profile", { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      .then(response => {
        setState({
          id:response.data.data.id,
          oldpw:"",newpw:"",renewpw:""})
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
      oldpw: "",
      newpw:"",
      renewpw: ""
    });
    setMessage("");
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.oldpw===""||state.newpw===""||state.renewpw==="")
      setMessage("Please enter all information!");
    else if(state.newpw!==state.renewpw)
      setMessage("Please re-type password correctly!");  
    else{
      setMessage("Please wait...");
      var url="https://myplsapp.herokuapp.com/rest-account/changePass";
      let info = {
        accountId: state.id,
        confirmPassword: state.renewpw,
        newPassword: state.newpw,
        oldPassword: state.oldpw
      }
      axios.put(url,info,{ headers: {"Authorization" : `Bearer ${props.token}`} })
        .then((response) => {
          alert("Your password has been changed");
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
      <h2>Change Password</h2>
      <hr/>
      {!state?<Spinner />:
      (<form onSubmit={handleSubmit}>            
        <div className="form-group row pt-2">
          <label htmlFor="" className="col-sm-3 offset-sm-1 mt-1"><h5>Old Password:</h5></label>
          <input type="password"
            className="form-control col-sm-6" name="oldpw" value={state.oldpw} onChange={handleChange} />
        </div>
        <div className="form-group row pt-1">
          <label htmlFor="" className="col-sm-3 offset-sm-1 mt-1"><h5>New Password:</h5></label>
          <input type="password"
            className="form-control col-sm-6" name="newpw" value={state.newpw} onChange={handleChange} />
        </div>
        <div className="form-group row pt-1">
          <label htmlFor="" className="col-sm-3 offset-sm-1 mt-1"><h5>Re-type New Password:</h5></label>
          <input type="password"
            className="form-control col-sm-6" name="renewpw" value={state.renewpw} onChange={handleChange} />
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

export default ChangePassword;
  
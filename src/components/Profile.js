import { useEffect, useState } from "react";
import axios from "axios";
import  { Link } from 'react-router-dom';

function Profile(props) {
  const [info,setInfo]= useState();
  useEffect(()=>{
    let mounted=true;
    axios.get("https://myplsapp.herokuapp.com/auth/profile", { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      .then(response => {
        if (mounted) setInfo(response.data.data);
      })
    .catch(err => console.log(err));
    
    return ()=>{mounted=false;}
  },[props.token]);

  return (
    <div className="container py-3 px-5 bg-light">
      <div className="d-flex">
        <h2 className="mr-auto">Profile</h2>
        <Link to="/editprofile">
          <button type="button" className="btn btn-lg btn-danger ">Edit Profile</button>
        </Link> 
      </div>
      <hr/>
      {info==null?"":(
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-4">
              <h4>Username:</h4>
            </div>
            <div className="col-lg-10 col-md-9 col-8">
              <h4>{info.username}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-4">
              <h4>Name:</h4>
            </div>
            <div className="col-lg-10 col-md-9 col-8">
              <h4>{info.userDto.name}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-4">
              <h4>Age:</h4>
            </div>
            <div className="col-lg-10 col-md-9 col-8">
              <h4>{info.userDto.age}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-4">
              <h4>Email:</h4>
            </div>
            <div className="col-lg-10 col-md-9 col-8">
              <h4>{info.userDto.email}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-4">
              <h4>Address:</h4>
            </div>
            <div className="col-lg-10 col-md-9 col-8">
              <h4>{info.userDto.address}</h4>
            </div>
          </div>  
        </div>     
      )
      }
    </div>        
  );
}

export default Profile;

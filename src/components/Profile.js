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
        <div>
          <h4>Name: {info.userDto.name}</h4>
          <h4>Age: {info.userDto.age}</h4>
          <h4>Email: {info.userDto.email}</h4>
          <h4>Address: {info.userDto.address}</h4>
        </div>     
      )
      }
    </div>        
  );
}

export default Profile;

import { useEffect, useState } from "react";
import axios from "axios";
import  { Link } from 'react-router-dom';

function Profile(props) {
  const [info,setInfo]= useState([]);
  useEffect(()=>{
    axios.get("https://myplsapp.herokuapp.com/auth/profile", { headers: {"Authorization" : `Bearer ${props.token}`} }) 
      .then(response => {console.log(response)
        //setInfo(response.data.data)
      })
    .catch(err => console.log(err));
    
  },[info]);

  return (
    <div className="container py-3 px-5 bg-light">
      <div className="d-flex"><h2 className="mr-auto">Profile</h2>
      <Link to="/editprofile">
        <button type="button" className="btn btn-lg btn-danger ">Edit Profile</button>
      </Link> 
      </div>
      <hr/>
      <h4>Name:ádáđâsd</h4>
      <h4>Age:</h4>
      <h4>Email:</h4>
      <h4>Address:</h4>
      
    </div>        
  );
}

export default Profile;

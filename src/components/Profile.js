// import { useState } from "react";
import axios from "axios";
import  { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <div className="container py-3 px-5 bg-light">
      <div className="d-flex"><h2 className="mr-auto">Profile</h2>
      <Link to="/editprofile">
        <button type="button" className="btn btn-lg btn-danger ">Edit Profile</button>
      </Link> 
      </div>
      <hr/>
      <h4>Name:</h4>
      <h4>Email:</h4>
      <h4>Address:</h4>
      
    </div>        
  );
}

export default Profile;

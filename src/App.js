import { BrowserRouter as Router, NavLink, Link, Route, Switch, Redirect } from 'react-router-dom';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-up";
import './App.css';
import Login from './screens/Login';
import Signup from './screens/Signup';
import NotFound from './screens/NotFound';
import Profile from './screens/Profile';
import ListMovie from './screens/ListMovie';
import Movie from './screens/Movie';
import Schedule from './screens/Schedule';
import MovieSchedule from './screens/MovieSchedule';
import Booking from './screens/Booking';
import EditProfile from './screens/EditProfile';
import Welcome from './screens/Welcome';
import ChangePassword from './screens/ChangePassword';
import ForgotPassword from './screens/ForgotPassword';
import BookingList from './screens/BookingList';

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  
  useEffect(()=>{
    if(localStorage && localStorage.getItem('token'))
      setToken(JSON.parse(localStorage.getItem('token')));
  },[token]);

  const handleToken=(token)=>{
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  }
  const handleLogout=()=>{
    localStorage.removeItem('token');
    setToken(null);
  }
  return (
    <PayPalScriptProvider options={{ "client-id": "AecXLRdMbRinhm8xaqYRmf-qFPfP6LL5NK_83DrA2yNnnm0sz4S61Ph7fY9MnMocCxO3laO766mSSUL2" }}>
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
          <NavLink className="navbar-brand" to="/"><i className="fas fa-film mr-2"></i>MOVIE BOOKING</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/movie" className="nav-link" activeClassName="active">Movie List</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink exact to="/schedule" className="nav-link" activeClassName="active">Schedule</NavLink>
              </li>
            </ul>
          </div>
          {token?
            <div>
              <Link to="/profile">
                <button type="button" className="btn bg-warning"><i className="fas fa-user mr-2"></i>Profile</button>
              </Link>
              <button type="button" className="btn btn-secondary ml-2" onClick={handleLogout}><i className="fas fa-sign-out-alt mr-1"></i>Log out</button>
            </div>
            :<div>
              <Link to="/login">
                <button type="button" className="btn btn-info"><i className="fas fa-sign-in-alt mr-1"></i>Log in</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-secondary ml-2"><i className="fas fa-user-plus mr-1"></i>Sign up</button>
              </Link>
            </div>}
        </nav>

        <Switch>
          <Route exact path="/">
            <Welcome/>
            <ListMovie/>
          </Route>
          <Route path="/login">
            {!token?<Login onReceiveToken={handleToken}/>:<Redirect to="/"/>}
          </Route>
          <Route path="/signup">
            {!token?<Signup/>:<Redirect to="/"/>}
          </Route>
          <Route path="/forgotpass">
            {!token?<ForgotPassword/>:<Redirect to="/"/>}
          </Route>
          <Route path="/profile">
            {token?<Profile token={token}/>:<Redirect to="/login"/>}
          </Route>
          <Route path="/editprofile">
            {token?<EditProfile token={token}/>:<Redirect to="/login"/>}
          </Route>
          <Route path="/changepass">
            {token?<ChangePassword token={token}/>:<Redirect to="/login"/>}
          </Route>
          <Route exact path="/movie">
            <ListMovie/>
          </Route>
          <Route exact path="/movie/:movieId">
            <Movie/>
          </Route>
          <Route exact path="/schedule">
            <Schedule/>
          </Route>
          <Route exact path="/schedule/:movieId">
            <MovieSchedule/>
          </Route>
          <Route exact path="/booking">
            {token?<Booking token={token}/>:<Redirect to="/login"/>}
          </Route>
          <Route path="/bookinglist">
            {token?<BookingList token={token}/>:<Redirect to="/login"/>}
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <ScrollToTop showUnder={160}>
          <button className="btn btn-lg btn-info"><i className="fas fa-lg fa-angle-up"></i></button>
        </ScrollToTop>
      </Router>  
    </PayPalScriptProvider>  
  );
}

export default App;

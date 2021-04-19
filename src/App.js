import { BrowserRouter as Router, NavLink, Link, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import ListMovie from './components/ListMovie';
import Movie from './components/Movie';
import Schedule from './components/Schedule';

function App() {
  const [token, setToken] = useState();
  
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
    setToken();
  }
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
        <NavLink className="navbar-brand" to="/"><i className="fas fa-film mr-2"></i>MOVIE BOOKING</NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/listmovie" className="nav-link" activeClassName="active">Movie List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/schedule" className="nav-link" activeClassName="active">Schedule</NavLink>
          </li>
        </ul>
        {token!=null?
          <div>
            <Link to="/profile">
              <button type="button" className="btn btn-info">Profile</button>
            </Link>
            <button type="button" className="btn btn-secondary ml-2" onClick={handleLogout}>Log out</button>
          </div>
          :<div>
            <Link to="/login">
              <button type="button" className="btn btn-info">Log in</button>
            </Link>
            <Link to="/login">
              <button type="button" className="btn btn-secondary ml-2">Sign up</button>
            </Link>
          </div>}
      </nav>
      <Switch>
        <Route exact path="/">
          <ListMovie/>
        </Route>
        <Route path="/login">
          {token==null?<Login onReceiveToken={handleToken}/>:<Redirect to="/"/>}
        </Route>
        <Route path="/signup">
          {token==null?<Signup/>:<Redirect to="/"/>}
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/listmovie">
          <ListMovie/>
        </Route>
        <Route path="/movie">
          <Movie/>
        </Route>
        <Route path="/schedule">
          <Schedule/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
      
      
  );
}

export default App;

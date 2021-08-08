import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const onSuccessMentor = response => console.log(response);
const onFailureMentor = response => console.error(response);

const onSuccessMentee = response => console.log(response);
const onFailureMentee = response => console.error(response);

function mentorLogin() {
  ReactDOM.render(
  <OAuth2Login
    authorizationUrl="https://accounts.spotify.com/authorize"
    responseType="token"
    clientId="9822046hvr4lnhi7g07grihpefahy5jb"
    redirectUri="http://localhost:3000/oauth-callback"
    onSuccess={onSuccessMentor}
    onFailure={onFailureMentor}/>,
  document.getElementById('root')
  );
}

function menteeLogin() {
  ReactDOM.render(
  <OAuth2Login
    authorizationUrl="https://accounts.spotify.com/authorize"
    responseType="token"
    clientId="9822046hvr4lnhi7g07grihpefahy5jb"
    redirectUri="http://localhost:3000/oauth-callback"
    onSuccess={onSuccessMentee}
    onFailure={onFailureMentee}/>,
  document.getElementById('root')
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The best way to connect with mentors. See yourself in your dream job today! 
        </p>
        <p></p>
        <button onClick={mentorLogin} className="btn">I'm a mentor!</button>
        <p></p>
        <button onClick={menteeLogin} className="btn">I'm a mentee!</button>
      </header>
    </div>
  );
}

export default App;

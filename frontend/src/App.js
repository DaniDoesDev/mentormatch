import mentorPic from './mentorpic.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import {Link} from "react-router-dom";

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
    className='btn'
    buttonText='Login as Mentor'
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
    className='btn'
    buttonText='Login as Mentee'
    onSuccess={onSuccessMentee}
    onFailure={onFailureMentee}/>,
  document.getElementById('root')
  );
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mentorPic} className="App-logo" alt="logo" />
        <p>
          The best way to connect with mentors. See yourself in your dream job today! 
        </p>
        <p></p>
        {/* <button onClick={mentorLogin} className="btn">I'm a mentor!</button> */}
        <Link to="/mentorJobDetails"><button className="btn">
           I'm a mentor!
         </button>
         </Link>
        <p></p>
        {/* <button onClick={menteeLogin} className="btn">I'm a mentee!</button> */}
        <Link to="/menteeInterestPage"><button className="btn">
           I'm a Mentee!
         </button>
         </Link>
      </header>
    </div>
  );
}
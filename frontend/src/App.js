import mentorPic from './mentorpic.png';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import {Link} from "react-router-dom";

const onSuccessMentor = response => console.log(response);
const onFailureMentor = response => console.error(response);

const onSuccessMentee = response => console.log(response);
const onFailureMentee = response => console.error(response);

const onFailure = response => console.error(response);  

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
  // Uses authorization code to make a POST request to get an access token,
  // which then is exchanged for user info. from the github api
  const [user, setUser] = useState(null);
  const onSuccess = ({code}) => 
    fetch("http://localhost:5000/github/token", {
    method: 'POST',
    body: JSON.stringify({code}),
    headers: {
      'content-type': 'application/json',
    },
    })
    .then(res => res.json())
    .then((data) => {
      return data.access_token;
    })
    .then((token) => {
      return fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
          Authorization: "token "+token,
        },
      });
    })
    .then(res => res.json())
    .then((data) => { // this is the user object returned by github's api
      // can store info. in database now!!
      console.log(data.name);
      console.log(data.email);
      setUser(data);
    });

  /****************/
  /*** App Page ***/
  /****************/
  return (
    <div className="App">
      <header className="App-header">
        <img src={mentorPic} className="App-logo" alt="logo" />
        <p>
          The best way to connect with mentors. See yourself in your dream job today! 
        </p>
        <OAuth2Login
    authorizationUrl='https://github.com/login/oauth/authorize'
    responseType="code"
    scope='read:user'
    clientId=
    clientSecret=
    redirectUri='http://localhost:3000/'
    onSuccess={onSuccess}
    onFailure={onFailure}/>
        {user && <p>Name: {user.name}</p>
          // user contains the object fetched from github api (needs the && bc it's null before the api is called)
          // this displays them on the page (can just do something else with them instead)
        }
        {user && <p>Email: {user.email}</p>} 
        {user && <p>Company: {user.company}</p>} 
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
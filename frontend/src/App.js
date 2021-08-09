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

var user = null;

function mentorLogin({code}) {
  // Uses authorization code to make a POST request to get an access token,
  // which then is exchanged for user info. from the github api
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
      user = data;    // set global user 
    });

    // make get or post requests here to do stuff in db (store user info.)

    // console.log(user.name);

    // go to mentor home page
    return window.location.href="http://localhost:3000/mentorHomePage";
}

function menteeLogin({code}) {
  // Uses authorization code to make a POST request to get an access token,
  // which then is exchanged for user info. from the github api
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
      user = data;    // set global user 
    });

    // REMOVE ANY CONSOLE.LOG statements AFTER DEBUGGING IS OVER
    // --> (it makes you reload the page again to go the next page instead)

    // make get or post requests here to do stuff in db (store user info.)

    // console.log(user.name);
    
    // go to mentee home page
    return window.location.href="http://localhost:3000/menteeHomePage";
}

export default function App() {
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
    buttonText="Sign up to be a mentor!"
    clientId=
    clientSecret=
    redirectUri='http://localhost:3000/'
    onSuccess={mentorLogin}
    onFailure={onFailureMentor}/>
      <p>
        
      </p>
        <OAuth2Login
    authorizationUrl='https://github.com/login/oauth/authorize'
    responseType="code"
    scope='read:user'
    buttonText="Sign up to be a mentee!"
    clientId=
    clientSecret=
    redirectUri='http://localhost:3000/'
    onSuccess={menteeLogin}
    onFailure={onFailureMentor}/>

        <p></p>
        {/* This doesn't really do anything  */}
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
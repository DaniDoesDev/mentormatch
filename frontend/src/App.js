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

function mentorSignUp({code}) {
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
    // fetch('http://127.0.0.1:8000/api/mentor/', {
    //   method = 'POST',
      
    // });
    // console.log(user.name);

    // go to mentor home page
    return window.location.href="http://localhost:3000/mentorJobDetails";
}

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
    // fetch('http://127.0.0.1:8000/api/mentor/', {
    //   method = 'POST',
      
    // });
    // console.log(user.name);

    // go to mentor home page
    return window.location.href="http://localhost:3000/mentorHomePage";
}


function menteeSignUp({code}) {
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

    console.log(user);
    // REMOVE ANY CONSOLE.LOG statements AFTER DEBUGGING IS OVER
    // --> (it makes you reload the page again to go the next page instead)

    // make get or post requests here to do stuff in db (store user info.)

    // console.log(user.name);
    
    // go to mentee home page
    return window.location.href="http://localhost:3000/menteeInterestPage";
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

    console.log(user);
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
    buttonText="Mentor Sign Up!"
    className="btn"
    clientId='16d350e690b51e39d0dd'
    clientSecret='24ecd4defbbb37e89904c714e91ff2bc3f636990'
    redirectUri='http://localhost:3000/'
    onSuccess={mentorSignUp}
    onFailure={onFailureMentor}/>
      <p>
        
      </p>
        <OAuth2Login
    authorizationUrl='https://github.com/login/oauth/authorize'
    responseType="code"
    scope='read:user'
    buttonText="Mentee Sign Up!"
    className="btn"
    clientId='16d350e690b51e39d0dd'
    clientSecret='24ecd4defbbb37e89904c714e91ff2bc3f636990'
    redirectUri='http://localhost:3000/'
    onSuccess={menteeSignUp}
    onFailure={onFailureMentor}/>

        <p></p>
        <OAuth2Login
    authorizationUrl='https://github.com/login/oauth/authorize'
    responseType="code"
    scope='read:user'
    buttonText="Mentor Log In"
    className="btn"
    clientId='16d350e690b51e39d0dd'
    clientSecret='24ecd4defbbb37e89904c714e91ff2bc3f636990'
    redirectUri='http://localhost:3000/'
    onSuccess={mentorLogin}
    onFailure={onFailureMentor}/>
      <p>
        
      </p>
        <OAuth2Login
    authorizationUrl='https://github.com/login/oauth/authorize'
    responseType="code"
    scope='read:user'
    buttonText="Mentee Log In"
    className="btn"
    clientId='16d350e690b51e39d0dd'
    clientSecret='24ecd4defbbb37e89904c714e91ff2bc3f636990'
    redirectUri='http://localhost:3000/'
    onSuccess={menteeLogin}
    onFailure={onFailureMentor}/>

        <p></p>
        {/* This doesn't really do anything  */}
        {/* <button onClick={mentorLogin} className="btn">I'm a mentor!</button> */}
        {/* <Link to="/mentorJobDetails"><button className="btn">
           I'm a mentor!
         </button>
         </Link>
        <p></p> */}
        {/* <button onClick={menteeLogin} className="btn">I'm a mentee!</button> */}
        {/* <Link to="/menteeInterestPage"><button className="btn">
           I'm a Mentee!
         </button>
         </Link> */}
      </header>
    </div>
  );
}
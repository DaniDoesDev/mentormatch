import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);  

function App() {
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
  
  // beginning of page
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The best way to connect with mentors. See yourself in your dream job today! 
        </p>
  <OAuth2Login
    authorizationUrl='https://github.com/login/oauth/authorize'
    responseType="code"
    scope='read:user'
    clientId='16d350e690b51e39d0dd'
    clientSecret= '24ecd4defbbb37e89904c714e91ff2bc3f636990'
    redirectUri='http://localhost:3000/'
    onSuccess={onSuccess}
    onFailure={onFailure}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm a mentor!
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm a mentee!
        </a>
        {
          user && <p>{user.name} {user.email}</p> 
          // user contains the object fetched from github api (needs the && bc it's null before the api is called)
          // this displays them on the page (can just do something else with them instead)
        }
      </header>
    </div>
  );
}

export default App;
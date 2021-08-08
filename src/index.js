// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

import MenteeInterestPage from "./MenteeInterestPage";
import MenteeHomePage from "./MenteeHomePage";
import MenteeMentorDetails from "./MenteeMentorDetails";

import MentorJobDetails from "./MentorJobDetails";
import MentorHomePage from "./MentorHomePage";
import MentorMenteeDetails from "./MentorMenteeDetails";

import App from './App'

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/page2" component={Page2} />

     <Route path="/menteeInterestPage" component={MenteeInterestPage} />
     <Route path="/menteeHomePage" component={MenteeHomePage} />
     <Route path="/menteeMentorDetails" component={MenteeMentorDetails} />

     <Route path="/mentorJobDetails" component={MentorJobDetails} />
     <Route path="/mentorHomePage" component={MentorHomePage} />
     <Route path="/mentorMenteeDetails" component={MentorMenteeDetails} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

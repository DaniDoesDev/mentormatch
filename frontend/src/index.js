import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

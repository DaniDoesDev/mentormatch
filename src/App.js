import logo from './logo.svg';
import mentorPic from './mentorpic.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import NotFound from './NotFound';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Routes from "./Routes"
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
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
        <button onClick={mentorLogin} className="btn">I'm a mentor!</button>
        <p></p>
        <button onClick={menteeLogin} className="btn">I'm a mentee!</button>
      </header>
      <Navbar.Collapse className="justify-content-end">
      <LinkContainer to="/NotFound">
          <Nav.Link>NOT FOUND</Nav.Link>
      </LinkContainer>
      </Navbar.Collapse>
      <Routes />
    </div>
  );
}


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
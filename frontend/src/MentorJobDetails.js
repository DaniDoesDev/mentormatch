import React from "react";
import {Link} from "react-router-dom";
import './MentorJobDetails.css';
import axios from 'axios';
    
export default class MentorJobDetails extends React.Component {
    state = {
      name: '',
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: this.state.name
      };
  
      axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div className = "MentorJobDetails">
        <p>Please input your name, job title and current company to be matched with a mentee!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Occupation:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Company:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <p></p>
            <Link to="/mentorHomePage"><button className="btn" type="submit">
            Submit job details
             </button>
             </Link>
          </form>
        </div>
      )
    }
  }

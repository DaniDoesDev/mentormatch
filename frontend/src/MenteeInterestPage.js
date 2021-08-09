import React from "react";
import {Link} from "react-router-dom";
import './MenteeInterestPage.css';
import axios from 'axios';


export default class MenteeInterestPage extends React.Component {
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
        <div className = "MenteeInterestPage">
        <p>Please input your name and job interests to be matched with a mentor!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Job Interest:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Company Interest:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <p></p>
            <Link to="/menteeHomePage"><button className="btn" type="submit">
            Submit Interests
             </button>
             </Link>
          </form>
        </div>
      )
    }
  }

// function MenteeInterestPage() {
    
//     return (
//         <div className="MenteeInterestPage">
//         <p>This is the mentee interest page where they will enter their potential job interests.</p>
//         <Link to="/menteeHomePage"><button className="btn">
//         Submit job interests
//         </button>
//         </Link>
//         </div>
//         );
        
//     }
    
//     export default MenteeInterestPage;


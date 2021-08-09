import React from "react";
import {Link} from "react-router-dom";
import './MenteeHomePage.css';
import axios from 'axios';


export default class MenteeHomePage extends React.Component {
    state = {
        persons: []
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
    
    render() {
        return (
            <div className="MenteeHomePage">
            <p>Here is your matched mentor's contact information. Reach out and start your journey in STEM today!</p>   
            <ul>
            { this.state.persons.slice(0,1).map(person => <p>{person.name}</p>)}
            { this.state.persons.slice(0,1).map(person => <p>Company: {person.company.name}</p>)}
            { this.state.persons.slice(0,1).map(person => <p>{person.email}</p>)}
            {/* { this.state.persons.slice(0,1).map(person => <p>{person.phone}</p>)} */}
            </ul>
            </div>
            )
        }
    }


// function MenteeHomePage() {
    
//     return (
//         <div className="MenteeHomePage">
//         <p>This is the mentee home page where they can see their mentor and click to view details</p>
//         <Link to="/menteeMentorDetails"><button className="btn">
//         EXAMPLE MENTOR
//         </button>
//         </Link>
//         </div>
//         );
        
//     }
    
//     export default MenteeHomePage;
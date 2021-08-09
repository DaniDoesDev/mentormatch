import React from "react";
import './MenteeMentorDetails.css';
import axios from 'axios';

export default class MentorMenteeDetails extends React.Component {
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
            <div className="MentorMenteeDetails">
            <p>Here is your matched mentor's contact information. Reach out and start your journey in STEM today!</p>   
            <ul>
            { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
            </div>
            )
        }
    }


// function MenteeMentorDetails() {
    
//     return (
//         <div className="MenteeMentorDetails">
//         <p>This is the mentee page where mentees can see the details of their mentor (name, email).</p>
//         </div>
//         );
        
//     }
    
//     export default MenteeMentorDetails;
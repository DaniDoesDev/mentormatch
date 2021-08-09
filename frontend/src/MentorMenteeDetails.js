import React from "react";
import './MentorMenteeDetails.css';
import axios from 'axios';

// function MentorMenteeDetails() {
    
//     return (
//         <div className="MentorMenteeDetails">
//         <p>This is the mentor page where mentors can see the details of any particular mentee after selecting them from the previous page (name, email, etc).</p>
//         </div>
//         );
        
//     }
    
//     export default MentorMenteeDetails;

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
                <p>This is the mentor page where mentors can see the details of any particular mentee after selecting them from the previous page (name, email, etc).</p>   
                <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
                </div>
                )
            }
        }
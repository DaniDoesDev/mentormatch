import React from "react";
import {Link} from "react-router-dom";
import './MentorHomePage.css';
import axios from 'axios';

    export default class MentorHomePage extends React.Component {
        state = {
            persons: []
        }
        
        componentDidMount() {
            // axios.get(`https://jsonplaceholder.typicode.com/users`)
            axios.get('http://127.0.0.1:8000/api/mentee/')
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
        }
        
        render() {
            return (
                <div className="MentorHomePage">
                <p>Here are your current matched mentees and their contact info.</p><p> Be a guiding light for a young woman on her STEM journey!</p>   
                <ul>
                { this.state.persons.slice(1,5).map(person => <p><p>{person.name}<p></p>{person.email}<p></p>{person.phone}</p>---</p>)}
                {/* { this.state.persons.slice(0,4).map(person => <p>{person.email}</p>)}
                { this.state.persons.slice(0,4).map(person => <p>{person.phone}</p>)} */}
                </ul>
                </div>
                )
            }
        }
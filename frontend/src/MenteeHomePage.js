import React from "react";
import {Link} from "react-router-dom";
import './MenteeHomePage.css';
import axios from 'axios';


var person = null;

export default class MenteeHomePage extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/mentor/')
        .then(res => {
            console.log(res.data);
            person = (res.data)[0];
            const persons = res.data;
            this.setState({ persons });
        })
    }
    
    render() {
        return (
            <div className="MentorHomePage">
            <p>Here is your matched mentor's contact information. Reach out and start your journey in STEM today!</p>   
            {
                person && (
                <div>
                    <p>Mentor Name: {person.name}</p>
                    <p>Mentor Email: {person.email}</p>
                    <p>Company: {person.company}</p>
                </div>
                )
            }
            </div>
            )
        }
    }
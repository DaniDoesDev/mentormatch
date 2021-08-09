import React from "react";
import {Link} from "react-router-dom";
import './MentorHomePage.css';
import axios from 'axios';

var person = null;

    export default class MentorHomePage extends React.Component {
        state = {
            persons: []
        }
        
        componentDidMount() {
            axios.get('http://127.0.0.1:8000/api/mentee/')
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
                <p>Here are your current matched mentees and their contact info.</p><p> Be a guiding light for a young woman on her STEM journey!</p>   
                {
                    person && (
                    <div>
                        <p>Mentee Name: {person.name}</p>
                        <p>Mentee Email: {person.email}</p>
                        <p>Company Interested In: {person.interested_company}</p>
                    </div>
                    )
                }
                </div>
                )
            }
        }
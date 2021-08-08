import React from "react";
import {Link} from "react-router-dom";
import './MentorJobDetails.css';

function MentorJobDetails() {
    
    return (
        <div className="MentorJobDetails">
        <p>This is the mentor job details page where they input their job field and company.</p>
        <Link to="/mentorHomePage"><button className="btn">
        Submit job details
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MentorJobDetails;
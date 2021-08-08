import React from "react";
import {Link} from "react-router-dom";
import './MenteeHomePage.css';

function MenteeHomePage() {
    
    return (
        <div className="MenteeHomePage">
        <p>This is the mentee home page where they can see their mentor and click to view details</p>
        <Link to="/menteeMentorDetails"><button className="btn">
        EXAMPLE MENTOR
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MenteeHomePage;
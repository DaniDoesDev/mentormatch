import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function MenteeHomePage() {
    
    return (
        <div>
        <p>This is the mentee home page where they can see their mentor and click to view details</p>
        <Link to="/menteeMentorDetails"><button className="btn">
        EXAMPLE MENTOR
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MenteeHomePage;
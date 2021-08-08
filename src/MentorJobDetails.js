import React from "react";
import {Link} from "react-router-dom";

function MentorJobDetails() {
    
    return (
        <div>
        <p>This is the mentor job details page where they input their job field and company.</p>
        <Link to="/mentorHomePage"><button className="btn">
        Click to submit job details
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MentorJobDetails;
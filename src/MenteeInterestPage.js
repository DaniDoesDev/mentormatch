import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function MenteeInterestPage() {
    
    return (
        <div>
        <p>This is the mentee interest page where they will enter their potential job interests.</p>
        <Link to="/menteeHomePage"><button className="btn">
        Click to submit job interets
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MenteeInterestPage;
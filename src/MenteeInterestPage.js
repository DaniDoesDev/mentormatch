import React from "react";
import {Link} from "react-router-dom";

function MenteeInterestPage() {
    
    return (
        <div>
        <p>This is the mentee interest page where they will enter their potential job interests.</p>
        <Link to="/menteeHomePage"><button className="btn">
        Submit job interests
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MenteeInterestPage;
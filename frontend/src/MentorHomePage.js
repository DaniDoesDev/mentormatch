import React from "react";
import {Link} from "react-router-dom";
import './MentorHomePage.css';

function MentorHomePage() {
    
    return (
        <div className="MentorHomePage">
        <p>This is the mentor home page where they can see their mentees listed.</p>
        <Link to="/mentorMenteeDetails"><button className="btn">
        EXAMPLE MENTEE 1
        </button>
        </Link>
        <p></p>
        <Link to="/mentorMenteeDetails"><button className="btn">
        EXAMPLE MENTEE 2
        </button>
        </Link>
        <p></p>
        <Link to="/mentorMenteeDetails"><button className="btn">
        EXAMPLE MENTEE 3
        </button>
        </Link>
        <p></p>
        <Link to="/mentorMenteeDetails"><button className="btn">
        EXAMPLE MENTEE 4
        </button>
        </Link>
        </div>
        );
        
    }
    
    export default MentorHomePage;
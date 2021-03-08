import React from "react";
import Moment from "react-moment";

function Header() {
    return (
    <div>
    <header className="jumbotron">
        <h1 className="display-3">Workday Scheduler</h1>
        <p className="lead">A simple calendar app for scheduling your work day.</p>
        <Moment format="dddd, MMMM Do YYYY, h:mm a"></Moment>
    </header>
    </div>
    );
    
}

export default Header;
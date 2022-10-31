import React from 'react';
import { Link } from "react-router-dom";

function Host_head() {
    return (
        <div className='top-head'>
            <Link to="/" className="light-grey">Help</Link>
            <Link to="/" className="light-grey">Save and exit</Link>
        </div>
    )
}

export default Host_head;


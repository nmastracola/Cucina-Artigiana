import React, {Component,} from 'react';
import {Link} from 'react-router';

//STYLING
import './notfound.css'

class NotFound extends Component {
    render() {
        return (
            <div className="not-found">
                <div className="card">
                <h1 className="error">404</h1>
                <h2>Page not found!</h2>
                <p>
                    <Link to="/">Go back to the main page</Link>
                </p>
                </div>
            </div>
        );
    }
}

export default NotFound;

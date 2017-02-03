import React, {Component} from 'react';
import auth from '../auth/auth'

class Logout extends Component {
    componentDidMount() {
        auth.logout()
    }
    render() {
        return (
            <div>
                <div>You are now logged out</div>
            </div>
        )
    }
}


export default Logout

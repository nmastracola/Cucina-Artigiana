import React, { Component, } from 'react';
// import {Form, Text,} from 'react-form'
import {withRouter} from 'react-router';
// import axios from 'axios'
import auth from '../auth/auth'
import './login.css';




// const LoginForm = (
//     <div>
//     <Form
//         onSubmit={(values) => {
//                 axios.post('http://localhost:3001/auth/local', {
//                     username: values.username,
//                     password: values.password
//                 })
//                     .then((res) => {
//                     console.log(res.data)
//                     })
//             }
//         }
//         validate={ values => {
//             const {username, password} = values;
//             return{
//                 username: !username ? 'Username required' : undefined,
//                 password: !password ? 'Password required' : undefined,
//             }
//         }}
//     >
//         {({submitForm}) => {
//             return (
//                 <form onSubmit={submitForm}>
//                     <Text
//                         field='username'
//                         placeholder='username'
//                     />
//                     <Text
//                         field='password'
//                         placeholder='password'
//                     />
//                     <button type='submit'>Login</button>
//                 </form>
//             )
//         }}
//     </Form>
//     </div>
// );



const LoginBox = withRouter(
    React.createClass({

        getInitialState() {
            return {
                error: false
            }
        },

        handleSubmit(event) {
            event.preventDefault()

            const email = this.refs.email.value
            const pass = this.refs.pass.value

            auth.login(email, pass, (loggedIn) => {
                if (!loggedIn)
                    return this.setState({ error: true })

                const { location } = this.props

                if (location.state && location.state.nextPathname) {
                    this.props.router.replace(location.state.nextPathname)
                } else {
                    this.props.router.replace('/')
                }
            })
        },
        render() {
        return (
            <div className="login-view">
                <div className="login-card">
                    <div className="form-container">
                        <h3>Login</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label><input ref="email" placeholder="email" /></label><br />
                            <label><input ref="pass" placeholder="password" /></label><br />
                            <button type="submit">Login</button>
                            {this.state.error && (
                                <p>Bad login information</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        )}
    }));




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.loggedIn()
        };
        this.updateAuth = this.updateAuth.bind(this)
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    }

    componentWillMount() {
        auth.onChange = this.updateAuth;
        auth.login()
    }

    render() {
        return (
            <div>
                <LoginBox/>
            </div>
        );
    }
}

export default Login;

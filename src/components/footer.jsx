import React, { Component } from 'react';
import '../paymentfont/css/paymentfont.css'
import './footer.css'
import { Form, Text } from 'react-form'

class Payments extends Component {
    render() {
        return (
            <div className="payments">
                <i className="pf pf-apple-pay"></i>
                <i className="pf pf-american-express"></i>
                <i className="pf pf-discover"></i>
                <i className="pf pf-visa"></i>
                <i className="pf pf-mastercard"></i>
                <i className="pf pf-stripe"></i>
            </div>
        )
    }
}

class Copy extends Component {
    render() {
        return (
            <div className="copyright">
                <p>Copyright © Cucina Artigiana 2017</p>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="mainFooter">
                <h1 className="announce-news"> Join our Monthly Newsletter </h1>
                <div className="newsletter-wrapper">
                <Form
                    className="newsletter-form"
                    validate={values => {
                        return {
                            email: !values.email ? 'Valid email required' : undefined
                    }}}>
                    <Text
                        className="newsletter"
                        field="email"
                        placeholder="Email Address"
                    >
                    </Text>
                    <div>
                    <button type="button" className="newsletter-submit">Submit</button>
                    </div>
                </Form>
                </div>
                <Payments />
                <span className="line"></span>
                <Copy />
            </footer>
        )
    }
}

export default Footer
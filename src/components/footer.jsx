import React, { Component } from 'react';
import '../paymentfont/css/paymentfont.css'
import './footer.css'

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
                <Payments />
                <span className="line"></span>
                <Copy />
            </footer>
        )
    }
}

export default Footer
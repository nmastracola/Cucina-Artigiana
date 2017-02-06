import React, {Component} from 'react';
import './contact.css'
import pasta from '../../media/shop.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-wrapper">
                <div className="title-wrapper">
                    <h1 className="title"> Get in Touch </h1>
                </div>
                <div className="contact-container">
                        <p className="sentence"> You can reach us by calling us during our operating hours or send us an email at contact@cucinaartigiana.com</p>
                        <h1 className="phone">Phone: 555-555-1234</h1>
                        <p className="address">Address: 424 La Costa Blvd<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Los Gatos, CA 95030
                            </p>
                        <p>Hours: Mon thru Fri, 9 to 5</p>
                        <img src={pasta} alt="pasta" className="about-image"/>
                    </div>
                </div>
        )
    }

}


export default Contact
import React, { Component } from 'react';

//STYLING
import './home.css';

class HomeCTA extends Component {
    render() {
        return (
            <div className="cta">
                <p>Artisanal Pastas and Bread</p>
            </div>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div className="hero">
                <HomeCTA/>
            </div>
        )
    }
}

export default Home
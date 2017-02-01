import React, { Component } from 'react';
// import axios from 'axios'

import Product from '../products/products'

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
                <Product />
            </div>
        )
    }
}

export default Home
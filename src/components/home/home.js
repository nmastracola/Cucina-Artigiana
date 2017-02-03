import React, { Component } from 'react';
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
            <div>
            <div className="hero">
                <HomeCTA/>
            </div>
                <div className="announce-container">
                <h1 className="announce">Our Products</h1>
                </div>
            <Product />
            </div>
        )
    }
}

export default Home
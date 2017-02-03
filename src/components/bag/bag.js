import React, { Component } from 'react';

class Bag extends Component {
    render() {
        return (
            <div>
                <div className="productbox">
                    <img className="productImg" src={this.props.image} alt="product"/>
                    <div className="productTitle">{this.props.name}</div>
                    <div className="productPrice">${this.props.price}.00</div>
                    <div className="quantity">Quantity: {this.props.quantity}</div>
                    <div className="trash"><i className="material-icons">delete</i></div>
                </div>
            </div>
        );
    }
}

export default Bag;
